const Environment = function (c,ctx){
    this.c=c;
    this.ctx=ctx;
    this.espPos=0;
    this.fespPos=0;
    this.espSpeed=1;
    this.espWidth=50;
    this.espimg=document.getElementById('esp');
};
Environment.prototype.update = function(){
    this.espPos -= this.espSpeed;
    if(this.espPos<-this.espWidth){
        this.espPos=0;
    }
};
Environment.prototype.render = function(){
    for (let i=0;i<=this.c.width/this.espWidth;i++){
        this.ctx.drawImage(this.espimg,this.espPos+i*this.espWidth,0);
    }
};