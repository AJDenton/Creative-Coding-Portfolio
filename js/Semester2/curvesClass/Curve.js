class Curve{
  //Used for passing through radius for overall circle, point radius and the array points
  constructor(r_, pointRadius_, vPoints_){
    this.r = r_;
    this.pointRadius = pointRadius_;
    this.vPoints = vPoints_;
  }

render(){
  //These draw through every point stored within the array
    // for(let i = 0; i<this.vPoints.length; i++){
    //   noStroke();
    //   fill(255,0,0);
    //   ellipse(this.vPoints[i].x, this.vPoints[i].y,this.pointRadius, this.pointRadius);
    // }

  //These draw through every line using co-ordinates stored within the array
    for(let i = 0; i<this.vPoints.length - 1; i++){
      stroke(255 , 50);
      strokeWeight(2);
  //Adding one to the vPoints because of the array index starting at 0
      line(this.vPoints[i].x, this.vPoints[i].y, this.vPoints[i + 1].x, this.vPoints[i + 1].y);
    }

    line(this.vPoints[this.vPoints.length - 1].x, this.vPoints[this.vPoints.length - 1].y, this.vPoints[0].x, this.vPoints[0].y);
    //pop();
  }
}
