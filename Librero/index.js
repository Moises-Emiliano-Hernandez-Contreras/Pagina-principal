var ctx,canvas;
var img=document.getElementById("img");
window.onload=function(){
    canvas=document.getElementById("micanvas");
    ctx= canvas.getContext("2d");
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
        stars: 3,
        autor: "B. Traven",
        genero: "Ficcion"
    },
    {
        title: "Hamlet",
        stars: 4,
        autor: "Wiliam Sh.",
        genero: "Poesia"
    },
    {
        title: "Orgullo y P.",
        stars: 2,
        autor: "Jane Austen",
        genero: "Sátira"
    }
    ];
    ctx.fillStyle="#AD7521";
    ctx.fillRect(0, 180, canvas.width, 10);
    var x=10,y=30;
    var l=96,m=32;
    var px=0;
    for(var op=0;op<book.length;op++){
        ctx.fillStyle="#"+l,m,m;
        ctx.fillRect(x,50,100,130);
        l+=50;
        m-=30;
        x+=110;
        ctx.fillStyle="#000000";
        ctx.font = "16px Cursive";
        
        ctx.fillText(book[op].title, px+20, y+56);
        ctx.fillText(book[op].autor,px+15,y+80);
        ctx.fillText(book[op].genero,px+20,y+105);
        for (var i = 0; i < book[op].stars; i++) {
            ctx.drawImage(img, px+15 + i*20, 150,20,20);
        }
        px=px+110;
    }
}