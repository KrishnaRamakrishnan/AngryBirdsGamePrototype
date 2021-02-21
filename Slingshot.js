class SlingShot {
    constructor(bodyA,pointB) {
      var options={
          stiffness:0.04,
          length:10,
          bodyA:bodyA,
          pointB:pointB
      }
this.pointB=pointB
this.image1=loadImage("sprites/sling1.png");
this.image2=loadImage("sprites/sling2.png");

      this.sling=Constraint.create(options)
      World.add(world, this.sling);
    }
     Fly(){
      this.sling.bodyA=null;
    }
    display(){
      image(this.image1,200,23);
      image(this.image2,170,23);
      if(this.sling.bodyA){
      
      
      var pointA=this.sling.bodyA.position 
      var pointB=this.pointB
      push();
      strokeWeight(5);
      line(pointA.x,pointA.y,pointB.x,pointB.y);
      pop();
    }
  };
}