var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(30);
        background(255,255,255);
background(64, 173, 80);
fill(0, 0, 0);
textSize(40);
text("Electrónica Mundial!", 10, 40);
textSize(20);
text("  *ENCUENTRA TODO LO QUE BUSCAS", 10, 87);
text("  *100% GARANTIZADO", 10, 107);
text("  *TRABAJAMOS CON MARCAS ",10,127);
text("  *OFICIALES",10,147);
fill(204, 255, 0);
textSize(30);
text("Kingston",200,250);
text("Adata",84,309);
text("Vorago",301,329);
text("Ridgeway",148,361);
text("Asus",64,250);
fill(255, 0, 0);
rect(200,150,124,40);
fill(240, 223, 223);
rect(200,150,42,40);
fill(0, 0, 0);
rect(208,159,10,10);
rect(208,175,10,10);
    }};
    // Get the canvas that Processing-js will use
   var canvas = document.getElementById("mycanvas"); 
   // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
   var processing = new Processing(canvas, sketchProc);