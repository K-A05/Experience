/*
 XOR file encryption/decryption in C, opens target file, reads the contents
 and encrypts/decrypts it then writes it to an output file.
 */
#include <stdlib.h>
#include <stdio.h>    /* To handle file input and output */
#include <string.h>   /* To handle strings in C */
#include <stdbool.h>  /* For boolean type */

#define BUFFER_SIZE 1024
#define KEY_LENGTH 8

// Function to convert hex string to byte
unsigned char hex_to_byte(const char *hex) {
    unsigned char byte = 0;
    sscanf(hex, "%2hhx", &byte);
    return byte;
}

int main(int argc, char *argv[]) {
    bool decrypt_mode = false;
    
    // Check for decrypt flag
    for (int i = 1; i < argc; i++) {
        if (strcmp(argv[i], "-d") == 0 || strcmp(argv[i], "--decrypt") == 0) {
            decrypt_mode = true;
            break;
        }
    }
    
    if (decrypt_mode) {
        printf("Running in decrypt mode\n");
    } else {
        printf("Running in encrypt mode\n");
    }
    
    // File paths could be made configurable via command line args too
    const char *input_file = decrypt_mode ? "cipher.txt" : "clear.txt";
    const char *output_file = decrypt_mode ? "decrypted.txt" : "cipher.txt";
    
    FILE* input = fopen(input_file, "r");
    FILE* output = fopen(output_file, "w");
    FILE* key_file;
    FILE* rand_source = NULL;
    
    unsigned char key[KEY_LENGTH];
    
    // Check if input file is opened successfully
    if (!input) {
        fprintf(stderr, "Error! Could not open input file: %s\n", input_file);
        return 1;
    }
    
    // Check if output file is opened successfully
    if (!output) {
        fprintf(stderr, "Error! Could not open output file: %s\n", output_file);
        fclose(input);
        return 1;
    }
    
    // In encrypt mode, generate a new key
    if (!decrypt_mode) {
        rand_source = fopen("/dev/urandom", "r");
        if (!rand_source) {
            fprintf(stderr, "Error! Could not open /dev/urandom\n");
            fclose(input);
            fclose(output);
            return 1;
        }
        
        key_file = fopen("key.txt", "w");
        if (!key_file) {
            fprintf(stderr, "Error! Could not open key file for writing\n");
            fclose(input);
            fclose(output);
            fclose(rand_source);
            return 1;
        }
        
        // Generate a random key
        if (fread(key, 1, KEY_LENGTH, rand_source) != KEY_LENGTH) {
            fprintf(stderr, "Error! Could not read enough random data\n");
            fclose(input);
            fclose(output);
            fclose(rand_source);
            fclose(key_file);
            return 1;
        }
        
        // Save the key in hexadecimal format
        for (int i = 0; i < KEY_LENGTH; i++) {
            fprintf(key_file, "%02x", key[i]);
        }
        fprintf(key_file, "\n");
        fclose(key_file);
        fclose(rand_source);
    } 
    // In decrypt mode, read the key from file
    else {
        key_file = fopen("key.txt", "r");
        if (!key_file) {
            fprintf(stderr, "Error! Could not open key file for reading\n");
            fclose(input);
            fclose(output);
            return 1;
        }
        
        // Read the key in hexadecimal format
        char hex_key[KEY_LENGTH * 2 + 1];
        if (fgets(hex_key, KEY_LENGTH * 2 + 1, key_file) == NULL) {
            fprintf(stderr, "Error! Could not read key from file\n");
            fclose(input);
            fclose(output);
            fclose(key_file);
            return 1;
        }
        
        // Convert hex string to bytes
        for (int i = 0; i < KEY_LENGTH; i++) {
            char hex_byte[3] = {hex_key[i*2], hex_key[i*2+1], '\0'};
            key[i] = hex_to_byte(hex_byte);
        }
        fclose(key_file);
    }
    
    if (decrypt_mode) {
        // For decryption, read hex pairs and convert to bytes
        char hex_pair[3] = {0}; // 2 chars + null terminator
        int c1, c2;
        size_t pos = 0;
        
        while ((c1 = fgetc(input)) != EOF && (c2 = fgetc(input)) != EOF) {
            hex_pair[0] = c1;
            hex_pair[1] = c2;
            hex_pair[2] = '\0';
            
            unsigned char encrypted_byte = hex_to_byte(hex_pair);
            unsigned char decrypted_byte = encrypted_byte ^ key[pos % KEY_LENGTH];
            fputc(decrypted_byte, output);
            
            pos++;
        }
    } else {
        // For encryption, read bytes and convert to hex
        char buffer[BUFFER_SIZE];
        size_t bytes_read;
        
        while ((bytes_read = fread(buffer, 1, BUFFER_SIZE, input)) > 0) {
            for (size_t i = 0; i < bytes_read; i++) {
                unsigned char encrypted = buffer[i] ^ key[i % KEY_LENGTH];
                fprintf(output, "%02x", encrypted);
            }
        }
    }
    
    // Close files
    fclose(input);
    fclose(output);
    
    printf("%s complete. Output saved to %s\n", 
           decrypt_mode ? "Decryption" : "Encryption", 
           output_file);
    
    return 0;
}
