class Box {
  constructor(x, y, color){
    var options = {
      restitution:0.04,
      friction:1,
      density:1.0
      //isStatic: false
  }
  this.body = Bodies.rectangle(x, y, 30, 40, options);
  this.x = x;
  this.y = y;
  // console.log(mouseX)
  // console.log(mouseY)
  World.add(world, this.body);
  this.color = color
}
display(){
  noStroke();
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  fill(this.color);
  rectMode(CENTER);
  rect(0, 0, 30, 40);
  // console.log(this.x);
  // console.log(this.y);
  pop();
}
}