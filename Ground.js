class Ground{
    constructor(a,b,c,d) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(a,b,c,d,options);
        this.width = c;
        this.height = d;
        World.add(spiceBiscuitsWorld, this.body);
    }

    display(){
        

        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}