/**
 * ColourPalette: provides a colour input for the user to customise the colour of their tool.
 * Inspired by the colour picker tool on the W3Schools website: https://www.w3schools.com/colours/colours_picker.asp 
 */
function ColourPalette() {
    // Default selected colour is black.
    this.selectedColour = "#000000";

    /**
     * Method to load the user's selected colour from the colour input element.
     */
    this.loadColours = function() {
        // Set the selected colour to the colour input's value, combined with the current alpha value.
        this.setColour(this.colourVal(document.querySelector("#colourInput").value));
    };

    /**
     * Set the current drawing colour.
     */
    this.setColour = function(colour) {
        this.selectedColour = colour;

        // Apply the selected colour as the current fill and stroke colours.
        stroke(this.selectedColour);

        // Convert RGB values of the selected colour to hexadecimal format.
        var Hex_R = red(this.selectedColour).toString(16); // toString() : javascript method to convert a number into a string, using base 16 to convert number to hexadecimal, done for each rgb value.
        if (Hex_R.length == 1) { Hex_R = "0" + Hex_R; }

        var Hex_G = green(this.selectedColour).toString(16);
        if (Hex_G.length == 1) { Hex_G = "0" + Hex_G; }

        var Hex_B = blue(this.selectedColour).toString(16);
        if (Hex_B.length == 1) { Hex_B = "0" + Hex_B; }

        // Update the colour input element's value with the hexadecimal colour value.
        document.querySelector("#colourInput").value = "#" + Hex_R + Hex_G + Hex_B; // concatenating the hex values to create a hex string to obtain the colour.
    };

    /**
     * Create a new colour with RGB values from acolour and an alpha value.
     */
    this.colourVal = function(Vcolour) {
        var c = color(Vcolour);
        return color("rgb(" + [red(c), green(c), blue(c)].join(',') + ")");
    };

    // Load the initial colours.
    this.loadColours();

    // Add an event listener to the colour input element to load the selected colour whenever it changes.
    document.querySelector("#colourInput").addEventListener('change', () => { this.loadColours(); });
}
