//make the color change when the user clicks
//need to fix the bug
var penColor = 'black';

function setPenColor(pen) {
    "use strict";
    penColor = pen;
}

function setPixelColor(pixel) {
    "use strict";
    pixel.style.backgroundColor = penColor;
}
