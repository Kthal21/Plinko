class Plinko {

constructor(x,y,diameter){

    var options={

isStatic:true

    }
this.x=x;
this.y=y;
this.diameter=diameter;
this.diameter=10;
this.body= Matter.Bodies.circle(x,y,diameter,options);
World.add(world,this.body);

}
display(){

    var paperpos=this.body.position;		

			push();
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
            ellipse(0,0,this.diameter, this.diameter);
            
      
			pop();
}
}