class boy {
    constructor(x, y, width, height) {
        var options = {
            isStatics:true
        }
        this.body = Bodies.rectangle(x, y, 50, 100, options);
	    this.width = 50;
        this.height = 100;
        this.image = loadImage("boy.png");
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        image.scale = 2;
        pop();
    }


}