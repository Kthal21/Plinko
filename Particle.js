class Particle {

constructor(x,y,diameter){

    var options={
        isStatic:false,
        restitution:0.3,
        friction:3,
        density:1.2

        
        }
        this.x=x;
this.y=y;
this.diameter=diameter;
this.body= Matter.Bodies.circle(x,y,diameter,options);
this.color= color (random(0,255), random(0,255), random(0,255));
this.diameter=5;
World.add(world,this.body);
//this.image=loadImage("sprites/paperImg.png");
}


display(){

    var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
            ellipse(0,0,this.r, this.r);
            //imageMode(CENTER);
       // image(this.image, 0,0, 150, 150);
			pop()
}



}