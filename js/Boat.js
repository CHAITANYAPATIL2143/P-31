class Boat {

  constructor(x, y, width, height,boatpos) {
    var options = {
      isStatic: false
    };
    this.width = width;
    this.height = height;
    this.boatPos = boatpos
    this.image = loadImage ("assets/boat.png")
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("brown");
    imageMode(CENTER);
    image(this.image,0,this.boatPos,this.width,this.height)
    pop();
  }
}
