/**
 * Toolbox class: A container for storing drawing tools.
 * Provides functions to add new tools and select a tool.
 */
function Toolbox() {
    var self = this;

    // Array to store the tools.
    this.tools = [];
    // Currently selected tool.
    this.selectedTool = null;

    /**
     * Event handler for toolbar item click.
     * Selects the clicked tool and updates the UI.
     */
    var toolbarItemClick = function() {
        // Remove borders from all toolbar items.
        var items = selectAll(".sideBarItem");
        for (var i = 0; i < items.length; i++) {
            items[i].style('border', '0');
        }

        // Extract tool name from the clicked item's ID.
        var toolName = this.id().split("sideBarItem")[0];
        self.selectTool(toolName);

        // Save the most recent changes to the pixel array.
        loadPixels();
    };

	//Add a new tool icon to the HTML sidebar.
    var addToolIcon = function(icon, name) {
        var sideBarItem = createDiv("<img src='" + icon + "'></div>");
        sideBarItem.class('sideBarItem');
        sideBarItem.id(name + "sideBarItem");
        sideBarItem.parent('sidebar');
        sideBarItem.mouseClicked(toolbarItemClick);
    };

	// Add a new tool to the toolbox
    this.addTool = function(tool) {
        // Ensure the tool has both an icon and a name.
        if (!tool.hasOwnProperty("icon") || !tool.hasOwnProperty("name")) {
            alert("Ensure your tool has both a name and an icon.");
        }
        this.tools.push(tool);
        addToolIcon(tool.icon, tool.name);

        // If no tool is currently selected, select this tool.
        if (this.selectedTool == null) {
            this.selectTool(tool.name);
        }
    };

	//Select a tool using its name.
    this.selectTool = function(toolName) {
        // Search for the tool by its name.
        for (var i = 0; i < this.tools.length; i++) {
            if (this.tools[i].name == toolName) {
                // If a tool is currently selected and has an unselect method, run it.
                if (this.selectedTool != null && this.selectedTool.hasOwnProperty("unselectTool")) {
                    this.selectedTool.unselectTool();
                }
                // Update the selected tool and highlight it on the toolbar.
                this.selectedTool = this.tools[i];
                select("#" + toolName + "sideBarItem").style("border", "2px solid red");

                // If the selected tool has options, populate them.
                if (this.selectedTool.hasOwnProperty("populateOptions")) {
                    this.selectedTool.populateOptions();
                }
            }
        }
    };
}
