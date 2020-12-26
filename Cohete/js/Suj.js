const Suj= function(x,y,ctx){
    this.x = x;
    this.y = y;
    this.ctx=ctx;
    this.velY=0;
    this.width=120;
    this.height=68;
    this.caida=false;
    this.ticks=0;
    this.spriteIndex=0;
    this.sprites = document.getElementById('im1');
    var self = this;
    window.addEventListener('keydown',function(e){
        if(e.keyCode===32 && !self.caida){
            self.velY=-16;
            console.log('spacebar');
        }        
    });
};
Suj.prototype.update = function(tubos){
    this.y+=this.velY;
    this.velY+=1.25;
    //this.choque(tubos);
    if(this.choque(tubos)){
        this.caida=true;
    }

};
Suj.prototype.render=function(){
    let renderX=this.x-this.width/2;
    let renderY=this.y-this.height/2;
    this.ctx.save();
    this.ctx.drawImage(this.sprites,renderX,renderY);
    this.ctx.restore();
}
Suj.prototype.choque=function(tubos){
    for(var i=0;i<tubos.length;i++){
        let e=tubos[i];
        let altot=e.ypos<=0;        
        let x0=e.xpos,x1=e.xpos+e.width;
        let alpha2 = this.x+44;
        let beta2 = this.y;
        if(altot){
            let y0=e.ypos+e.length;
            let alpha = this.x;
            let beta = this.y-this.height/2;            
            if(alpha > x0 && alpha <x1 && beta < y0  || alpha2>x0 && alpha2 < x1 && beta2 < y0){
              return true;
            }
        }
        else{
            let y2 = e.ypos;
            let a = this.x;
            let b = this.y+this.height/2;
            if(a>x0 && a<x1 && b>y2 || alpha2>x0 && alpha2 < x1 && beta2 > y2){
                return true;
            }
        }
    }
    return false;
};
function puntos(){
    let score=0;
    if(!this.choque(tubos)){
        score++;
    }
    return score;
}