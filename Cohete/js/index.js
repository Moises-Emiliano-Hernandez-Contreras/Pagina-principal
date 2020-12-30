
        var score=0;
        window.onload = function(){
            const c = document.getElementById('canvas');
            c.width = innerWidth;
            c.height = innerHeight;
            const ctx= c.getContext('2d');
        const environment= new Environment(c,ctx);
        const sujeto = new Suj(250,350,ctx);
        const tubos= [ ];
        let asignar=generador(ctx,c.width,c.height);
            tubos.push(asignar.arriba,asignar.bajo);
        setInterval(function(){
            let asignar=generador(ctx,c.width,c.height);
            tubos.push(asignar.arriba,asignar.bajo);
            }, 2600);
        gameloop();
            function gameloop(){
                ctx.fillRect(0,0,c.width,c.height);
                environment.update();
                environment.render();
                tubos.forEach(function(tubo1){
                    tubo1.update();
                    tubo1.render();
                });        
                sujeto.update(tubos);
                sujeto.render();
                if(sujeto.caida){
                    console.log("choque");
                    drawGameOver(ctx,c);
                    return;
                }else{
                    console.log("Pasa");
                    ctx.font="30px Verdana";
                    ctx.textAlign="center";
                    ctx.fillText("PUNTOS: "+score++,c.width-400/2,c.height-600);
                }
                window.requestAnimationFrame(gameloop);
            }
        };
        function generador(ctx,canvasWindth,canvasHeight){
            let arriba = Math.round(Math.random()*200+50);
            let bajo = canvasHeight-200-arriba;
            let valores={ };
            valores.arriba= new Tubo(canvasWindth,-5,arriba,4,ctx);
            valores.bajo= new Tubo(canvasWindth,canvasHeight+5-bajo,bajo,4,ctx);
            return valores;
        };
        function drawGameOver(ctx,c){
            ctx.font="60px Verdana";
            ctx.textAlign="center";
            ctx.fillText("¡¡¡Juego Terminado!!! ",c.width/2,c.height/2);
            ctx.fillText("PUNTOS: "+score,c.width/2,(c.height/2)+100);
            //ctx.font="30px Verdana";
        };
        /*function Puntos(ctx,c){
            ctx.font="30px Verdana";
            //ctx.textAlign="center";
            ctx.fillText(sujeto.Puntos(),(c.width/2)+300,c.height/2);
        };*/