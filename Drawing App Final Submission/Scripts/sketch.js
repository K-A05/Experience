// Global variables for storing the toolbox, color palette, and helper functions.
var toolbox = null;
var colourP = null;
var helpers = null;

function setup() {
    // Create a canvas to fit the 'content' div from index.html.
    canvasContainer = select('#content');
    c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
    c.parent("content");

    // Initialize helper functions and the color palette.
    helpers = new HelperFunctions();
    colourP = new ColourPalette();

    // Initialize the toolbox for storing the tools.
    toolbox = new Toolbox();

    // Add various tools to the toolbox.
    toolbox.addTool(new FreehandTool());
    toolbox.addTool(new LineToTool());
    toolbox.addTool(new SprayCanTool());
    toolbox.addTool(new mirrorDrawTool());
    toolbox.addTool(new Eraser());
    toolbox.addTool(new BucketTool());
    toolbox.addTool(new Stamp());

    // Set the canvas background color to white.
    background(255);
}

function draw() {
    // Call the draw function of the currently selected tool.
    // Check if the selected tool has a 'draw' method.
    if (toolbox.selectedTool.hasOwnProperty("draw")) {
        toolbox.selectedTool.draw();
    } else {
        // Alert the user if the selected tool lacks a 'draw' method.
        alert("It seems your tool doesn't have a draw method!");
    }
}


