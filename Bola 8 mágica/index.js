var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(30);
        background(255,255,255);
fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1,5));
if (answer===1) {
    fill(0, 28, 28);
    textSize(13);
    text("NO", 190, 200);
    text("NI LO INTENTES", 150, 229); 
}
else if(answer===2){
    fill(198, 204, 110);
    textSize(13);
    text("SI", 194, 208);
    text("ABSOLUTAMENTE", 144, 241);
}
else if(answer===3){
    fill(115, 37, 37);
    textSize(13);
    text("NO", 189, 200);
    text("DETENTE", 172, 229);
}
else if(answer===4){
    fill(116, 176, 113);
    textSize(13);
    text("POR SUPUESTO", 149, 229);
    text("SIGUE", 180, 200);
}
else if(answer===5){
    fill(217, 147, 217);
    textSize(13);
    text("NO", 190, 210);
    text("NUNCA LO HAGAS", 142, 244);
}
    }};
    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processing = new Processing(canvas, sketchProc);