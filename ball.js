class Ball {
    constructor(x, y, r) {
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 0.04
        }
        this.r = r;
        this.ball = Bodies.circle(x, y, r, options);
        World.add(world, this.ball);
    }

    display() {
        var pos = this.ball.position;
        var angle = this.ball.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipse(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}