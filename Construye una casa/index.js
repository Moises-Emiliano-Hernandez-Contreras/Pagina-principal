var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(30);
        background(255,255,255);
background(219, 255, 255);
fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);
fill(6, 82, 27);
rect(0,320,413,80);
fill(255, 255, 255);
rect(60, 150, 278, 207);
fill(153, 84, 0);
var x=65;
var y=150;
while(x<=305){
    rect(x,y,30,206);
    x+=30;
}
rect(60,150,277,20);
rect(60,338,277,20);
fill(120, 66, 19);
rect(180, 288, 40, 70);
fill(0, 0, 0);
var vx=70;
var vy=170;
for(var i=1;i<=4;i++){
    rect(i*70,170,40,40);
    for(var j=1;j<=2;j++){
    rect(i*70,230,40,40);
    }
}
    }};
    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processing = new Processing(canvas, sketchProc);