var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(30);
        background(255,255,255);
var bodyX = 200;
var bodyY = bodyX+189;
var bodyW = 118;
var faceW = bodyW/2;
draw = function() {
    background(207, 254, 255);
    fill(92, 59, 2);
    ellipse(bodyX,bodyY,376,499);
    fill(0, 0, 0);
    ellipse(bodyX+50,239,30,30);
    ellipse(bodyX-50,239,30,30);
    fill(18, 18, 18);
    ellipse(bodyX,292,79,61);
    noStroke();
    fill(92, 59, 2);
    ellipse(95,130,80,274);
    ellipse(300,130,80,274);
    fill(0, 0, 0);
    ellipse(95,130,38,145);
    ellipse(300,130,38,145);
    fill(0, 0, 0);
    arc(200,340,135,mouseY-19,46,167);
};
    }};
    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processing = new Processing(canvas, sketchProc);