function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245, 245, 225, 200);


  strokeWeight(10);
  strokeCap(SQUARE);
  //horizontal line A
  stroke(0,0,0);
  line(0, 20, 400, 20);

   //vertical line A
  line(35, 0, 35, 400);

  //horizontal line B
  line(0, 280, 400, 280);
  
   //horizontal line C
   stroke(0,0,0);
  line(35, 315, 375, 315);
  
    //vertical line B
  stroke(0,0,0);
  line(375, 0, 375, 400);
  
  //horizontal red line A
  stroke(225,0,0);
  line(0, 365, 400, 365);
  
  //horizontal red line B
  line(0, 65, 400, 65);
  
  //horizontal red line C
  strokeWeight(15);
  line(380, 120, 400, 120);
  
  //horizontal red line D
  strokeWeight(10);
  line(75, 0, 75, 400);
  
  //vertical red line C
  strokeWeight(14);
  line(300, 370, 300, 400);
 
  //vertical yellow line A
  strokeWeight(15);
  stroke(250,225,0);
  line(180, 370, 180, 400);
  
  //vertical yellow line B
  stroke(250,225,0);
  line(345, 370, 345, 400);
  
  //horizontal yellow line A
  strokeWeight(19);
  stroke(250,225,0);
  line(0, 115, 30, 115);
 
  //horizontal yellow line B
  strokeWeight(19);
  stroke(250,225,0);
  line(380, 235, 400, 235);
  
  //vertical blue line A
  strokeWeight(14);
  stroke(100,125,225);
  line(110, 370, 110, 400);
  
  //vertical blue line B
  strokeWeight(16);
  stroke(100,125,225);
  line(235, 370, 235, 400);

}
