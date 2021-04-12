class Drops{
    constructor(x,y){
        var Maxdrops = 100
        var options={
            restitution: 0.1,
            friction:0.01
        }
    this.body = Bodies.circle(x,y,5);
    this.r=5;
    World.add(world, this.body);
    }
    display(){
        noStroke();
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    }
}