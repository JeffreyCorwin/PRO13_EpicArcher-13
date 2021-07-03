class PlayerArrow {
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.image = loadImage("./assets/arrow.png");
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      //this.body = Bodies.circle(x, y, this.width, options)
      //Matter.Body.setAngle(this.body, PI);

      this.trojectory = [];
      World.add(world, this.body);
       }
    shoot() {
      var velocity = p5.Vector.fromAngle(playerArcher.angle);
      velocity.mult(20);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body,{x:velocity.x +50,y: velocity.y }); 
    }
    display() {

        var pos = this.body.position;
    
        push();
        translate(pos.x, pos.y);
        rotate(PI/100);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

        if(this.body.velocity.x > 0 && pos.x > 300){
          var position = [pos.x, pos.y];
          this.trojectory.push(position);
    
    
    }
    
    for(var i = 0; i < this.trojectory.length ; i++){
      ellipseMode(RADIUS);
      ellipse( this.trojectory [i][0], this.trojectory [i][1], 5);
    }
  }
}