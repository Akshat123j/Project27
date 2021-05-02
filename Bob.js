class Bob{
    constructor(x,y){
        var options={
            isStatic: false,
            density: 7.8,
            restitution: 1,
        }
        this.body=Bodies.circle(x,y,25,options);

        World.add(world,this.body)
    }
    display(){
        fill("pink");
        ellipse(this.body.position.x,this.body.position.y,50);
    }
    
}