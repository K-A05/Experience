function create_platforms(x, y, length) {
    var p = {
        x: x,
        y: y, 
        length: length,
        draw: function() {
            fill(178,34,34);
            noStroke();
            rect(this.x, this.y, this.length, 20);
            fill(220,220,220)
            rect(this.x + 40, this.y, 5, 20)
            rect(this.x + 80, this.y, 5, 20)
            rect(this.x + 120, this.y, 5, 20)
            rect(this.x + 160, this.y, 5, 20)
        },
        checkContact: function(gameChar) {
            var onPlatformX = gameChar.x > this.x && gameChar.x < this.x + this.length;
            var onPlatformY = gameChar.y >= this.y && gameChar.y <= this.y + 5;
            if (onPlatformX && onPlatformY)
            {
              onPlatform = true;
              isFalling = false;
              gameChar.y = this.y;
              return true;
            } 
            else {
              onPlatform = false;
              if (!onPlatformX && gameChar.y != floorPos_y) {
                isFalling = true;
              }
              return false;
            }
        },          
        getY: function() {
            return this.y;
        },
        getX: function() {
            return this.x;
        },
        getLength: function(){
            return this.length;
        }
    }
    return p;
}
