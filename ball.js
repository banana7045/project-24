class Ball{
 constructor(x,y,r){
this.body = Bodies.circle(x,y,r/2,{restitution:0.8})
this.r=r
World.add(world,this.body)
 }   
 display(){
 ellipseMode(RADIUS)  
 ellipse(this.body.position.x,this.body.position.y,this.r,this.r) 
 }
}