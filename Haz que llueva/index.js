var xPositions = [200,300,400];
        var yPositions = [0,100,200];
var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(60);
        background(255,255,255);
for(var i=0;i<20;i++){
    xPositions.push(random(0,400));
    yPositions.push(random(0,400));
}
//var x = event.keyCode; 
//draw = function() {
    gameloop();
    function gameloop(){
    background(204, 247, 255);
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        var c=xPositions.length*10;
        fill(random(0,150), random(150,250),random(100,250));
        ellipse(xPositions[i], yPositions[i], 10, 10);
        //rect(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        if(yPositions[i]>400){
            yPositions[i]=0;
        }
        
    }
    window.addEventListener('click',function(e){
            xPositions.push(random(0,400));
            yPositions.push(random(0,400));
            console.log('spacebar');
    });
        window.requestAnimationFrame(gameloop);
    }
    }};
// Get the canvas that Processing-js will use
var canvas = document.getElementById("mycanvas"); 
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processing = new Processing(canvas, sketchProc);