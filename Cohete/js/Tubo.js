const Tubo = function(xpos,ypos,length,vel,ctx){
    this.ypos=ypos;
    this.xpos=xpos;
    this.length=length;
    this.ctx=ctx;
    this.vel=vel;
    this.width=150;
};
Tubo.prototype.update= function(){
    this.xpos-=this.vel;
};
Tubo.prototype.render = function(){
    //this.ctx.save();
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(this.xpos,this.ypos,this.width,this.length-20); 
    this.ctx.fillStyle = "#572364";
    this.ctx.fillRect(this.xpos+5,this.ypos+5,this.width-10,this.length-10); 
    this.ctx.fillStyle="#FFFFFF";
};
//const Tubo = function(ypos,xpos,le)