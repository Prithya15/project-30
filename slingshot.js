class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.004
        }
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
        this.bodyA=bodyA
        this.pointB=pointB
    }
    display(){
        if(this.sling.bodyA){
            line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
        }
        
    fly(){
        
        this.sling.bodyA=null
        console.log(this.sling.bodyA)
    }
    attach(){
        this.sling.bodyA=bodyA  
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)  
    }
    attach(bodyA){
        this.sling.bodyA=(bodyA)  
     
}
}