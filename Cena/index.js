var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(30);
        background(255,255,255);
        background(186, 145, 20); // wooden table
fill(255, 222, 10);
ellipse(200, 200, 350, 350); // plate
fill(255, 255, 255);
ellipse(200, 200, 300, 300); 
//huevo
ellipse(176,258,161,162);
fill(247, 255, 0);
ellipse(176,258,50,50);
//tocinos
fill(242, 142, 142);
rect(256,87,32,150);
rect(308,119,32,150);
fill(255, 255, 255);
rect(268,89,10,148);
rect(319,120,10,148);
//taza
fill(225, 255, 255);
ellipse(200,113,80,80);
rect(238,100,9,20);
fill(0, 0, 0);
ellipse(200,113,70,70);
//hotcakes
fill(255, 179, 0);
ellipse(118,143,90,90);
fill(251, 255, 5);
rect(106,128,25,25);
//cuchara
fill(166, 158, 166);
noStroke();
ellipse(70,220,30,47);
rect(62,238,17,116);
//cubierto
rect(273,245,17,150);
ellipse(275,299,23,107);

        
}};
   // Get the canvas that Processing-js will use
   var canvas = document.getElementById("mycanvas"); 
   // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
   var processing = new Processing(canvas, sketchProc);