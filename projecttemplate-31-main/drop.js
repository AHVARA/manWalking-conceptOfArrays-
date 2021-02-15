class Drop{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':0.001
            
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;
         World.add(world, this.body);
      }
      update(){
          if(this.body.position.y>height){
              Matter.Body.setPosition(this.body,{x:random(0,1300),y:random(0,800)})
          }
      }
      display(){
       fill("blue");
       ellipseMode(RADIUS)
       ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);

      }
}