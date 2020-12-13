var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(30);
        background(255,255,255);
background(89, 216, 255);
var centerX = 200;
var centerY = 100;
var bodyLength = 118;
        var bodyHeight = 74;
        var bodyColor = color(162, 0, 255);
        var drawfish=function(centerX,centerY,bodyLength,bodyHeight,bodyColor){
          noStroke();
        fill(bodyColor);
        // body
        ellipse(centerX, centerY, bodyLength, bodyHeight);
        // tail
        var tailWidth = bodyLength/4;
        var tailHeight = bodyHeight/2;
        triangle(centerX-bodyLength/2, centerY,
                 centerX-bodyLength/2-tailWidth, centerY-tailHeight,
                 centerX-bodyLength/2-tailWidth, centerY+tailHeight);
        // eye
        fill(33, 33, 33);
        ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);  
        };
        drawfish(200,350,178,74,color(162,0,55));
        drawfish(20,10,176,74,color(162,0,255));
        drawfish(290,190,100,102,color(162,0,25));
        drawfish(240,280,118,35,color(1200,0,255));
        drawfish(200,100,118,74,color(12,0,255));
        fill(7, 66, 4);
        rect(225,380,-119,65,60);
        rect(120,380,-119,65,60);
        rect(330,380,-119,65,60);
        rect(440,380,-119,65,60);
    }};
    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processing = new Processing(canvas, sketchProc);