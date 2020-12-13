var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(30);
        background(255,255,255);
        var book = [{
            title: "The Giver",
            stars: 3,
            autor: "Lous Lowry",
            genero: "Novela"
        },
        {
            title: "La iliada",
            stars: 4,
            autor: "Homero",
            genero: "poseia"
        },
        {
            title: "Macario",
            stars: 4,
            autor: "B. Traven",
            genero: "Ficcion"
        }
        ];
        
        // dibuja el librero
        fill(173, 117, 33);
        rect(0, 120, width, 10);
        // dibuja el libro
        var x=10,y=29;
        var l=150,m=250;
        var px=0;
                
        //ciclo para escribir sobre las portadas
        for(var op=0;op<book.length;op++){
            //eliminé un for y ahora se dibujan las portadas     al mismo tiempo que se escribé sobre ella.
            fill(l,m,m);
            rect(x,20,90,100);
            l+=50;
            m-=30;
            x+=110;
            fill(0, 0, 0);
            text(book[op].title, px+15, 29, 70, 100);
            text(book[op].autor,px+15,y+30,70,100);
            text(book[op].genero,px+15,y+55,70,100);
            //ciclo que imprime las estrellas
            for (var i = 0; i < book[op].stars; i++) {

                //image(getImage("cute/Star"), px+15 + i*20, 90,20,30);
            }
            px=px+110;
        }    
    }};
        // Get the canvas that Processing-js will use
        var canvas = document.getElementById("mycanvas"); 
        // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
        var processing = new Processing(canvas, sketchProc);