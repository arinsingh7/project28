class Mango {
    constructor(x, y, r){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1
        }
        this.body = Bodies.circle(x, y, this.r, options);
        this.r = radius;
        this.image = loadImage("mango.png");
        World.add(world, this.body);

    }
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, x, y, this.r);
    pop(); 


}


}