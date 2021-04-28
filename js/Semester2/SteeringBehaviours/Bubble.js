//Bubble class
class Bubble{
    constructor(x,y){
    //Starting position of objects
    this.pos = createVector(random(-width,width), random(-height, height), random(-width,height));
    //Target for the objects
    this.target = createVector(x,y);
    //Velocity of the objects
    this.velocity = createVector(random(-1,1), random(-1,1), random(-1,1));
    //Acceleration of the objects
    this.acceleration = createVector();
    //Speed of the 
    this.maxSpeed = 10;
    this.maxForce = .3;
}

update(){
    //add the velocity vector to the position of the object
    this.pos.add(this.velocity);
    //add the acceleration to the velocity
    this.velocity.add(this.acceleration);
    //Update the acceleration and reset it to zero
    this.acceleration.mult(0);
}

show(){
    ambientMaterial(bubbleCol);
    noStroke();
    push();
    //Have each object start from a random spot on the x, y and z axis
        translate(this.pos.x, this.pos.y, this.pos.z);
        //solid sphere
        sphere(5);
        //outer sphere
        fill(255,255,255,10);
        sphere(15);
    pop();
}

//behaviour of the object when it arrives at it's destination
behaviour(){
    //when the object arrives at its destination, apply a force
    let arrive = this.arrive(this.target);
    this.applyForce(arrive);
    let moveAway = createVector(mouseX-width/2, mouseY-height/2);
    let run = this.run(moveAway);
    arrive.mult(0);
    run.mult(30);
    this.applyForce(run);
}

applyForce(force){
    //add the force to the acceleration
    this.acceleration.add(force);
    }

arrive(target){
    bubbleCol = color(255);
    //subtract the position of the object from the target, to move the objects to their targets
    let desired = p5.Vector.sub(target, this.pos);
    //Track the magnitude between the target and object position
    let dis = desired.mag();
    //Make the speed maximum
    let speed = this.maxSpeed;
    //if the distance of the object is less than 100, change the speed
    if(dis < 100){
        speed = map(dis, 0, 100, 0, this.maxSpeed);
    }
    //Change the mag to the new set speed - spheres wont move
    desired.setMag(speed);
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForce);
    return steer;
}

run(target){
    
    //Desired placement is the position of the object minus the target
    let desired = p5.Vector.sub(target, this.pos);
    //Obtaining the magnitude of the desired position
    let dis = desired.mag();
    //if the dis is less than 100, do something
    if(dis<100){
        //change the color to red
        bubbleCol = color(255, 0,0);
        //Set the magnitude between the target and object position
        desired.setMag(this.maxSpeed);
        //Push the object away
        desired.mult(-1);
        let steer = p5.Vector.sub(desired, this.velocity);
        steer.limit(this.maxForce);
        return steer;
    } else{
        return createVector(0,0,0);
    }
    
}

// seek(target){
//     let desired = p5.Vector.sub(target, this.pos);
//     desired.setMag(this.maxSpeed);
//     let steer = p5.Vector.sub(desired, this.velocity);
//     steer.limit(this.maxForce);
//     return steer;
//     }
}
