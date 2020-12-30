var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(120);
        background(255,255,255);
        background(186, 145, 20); // wooden table
var xPos = 0;
var yPos = 400;
var s=350;
fill(255, 255, 255);
ellipse(200,200,5,5);
draw = function() {
    background(29, 40, 115);
    fill(255, 255, 255);
ellipse(173,336,5,5);
ellipse(58,161,5,5);
ellipse(331,240,5,5);
ellipse(142,253,5,5);
ellipse(331,89,5,5);
ellipse(95,38,5,5);
ellipse(260,128,5,5);
    fill(255, 242, 0);
    ellipse(xPos,yPos, s, s);
    s--;
    xPos+=1;
    yPos-=1;  
};
    }};
    // Get the canvas that Processing-js will use
   var canvas = document.getElementById("mycanvas"); 
   // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
   var processing = new Processing(canvas, sketchProc);