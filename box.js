class Box {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            restitution: 0.8,
            friction: 1,
            density: 0.04
        };
        this.width = width;
        this.height = height;
        this.box = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.box);
    }

    display() {
        var pos = this.box.position;
        var angle = this.box.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("lightyellow");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}