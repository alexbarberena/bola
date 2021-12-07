class Paper{
    constructor(x,y)
   {
      var options={
          isStatic:false,
          restitution:0.3,
          friction:0,
          density:1.2
      } 
      this.body = Bodies.circle(x, y,20, options);
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      
        var paperpos=this.body.position;
      
        push();
      translate(paperpos.x, paperpos.y);
      
      fill(255,0,255)
      imageMode(CENTER);
      image(this.image, 0, 0,70,70);
      ellipse(0,0,this.r,this.r);
      pop();
    }	
}