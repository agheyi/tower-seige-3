class Polygon
{
    constructor()
    {
        this.body = Bodies.circle(40, 40, 30, {restitution:0.8, friction:1.0, density:1.0});
        World.add(world, this.body)
        this.radius = 2*40
        this.polygon_img = loadImage('hexagon.png')
    }
    display()
    {
        var pos = this.body.position
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.polygon_img, 0, 0, this.radius, this.radius);
        pop();
    }
}