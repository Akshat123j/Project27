class Ceiling{
    constructor(x,y){
        this.height=30
        this.width=width
        this.body=Bodies.rectangle(x,y,width,this.height,{isStatic: true,restitution: 1})

        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        fill("white")
        rect(this.body.position.x,this.body.position.y,this.width,30)
    }
}