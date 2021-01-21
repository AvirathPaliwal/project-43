var hr,mn,sc;
var myhour,myminute,mysecond;



function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);

}

function draw() {
  background(0);
  translate(200,200);

  hr = hour();
  mn = minute();
  sc = second();

 
  strokeWeight(5);
  stroke("red");
   fill("yellow")
  textSize(50);
  text(hr%12+ " : "+ mn +" : "+ sc,300,50);
// second
  strokeWeight(5);
  stroke("lightgreen");
  noFill();
  rotate(-90);
  mysecond = map(sc,0,60,0,360);
  arc(0, 0, 300, 300, 0, mysecond);
  push()
  rotate(mysecond);
  stroke("lightgreen");
  strokeWeight(7);
  line(0,0,110,0);
pop()
// minute
  strokeWeight(5);
  stroke("cyan");
  noFill();
  rotate(-90);
  myminute = map(mn,0,60,0,360);
  arc(0,0,280,280,0,myminute);
  push()
    rotate(myminute);
    stroke("cyan");
    strokeWeight(7);
    line(0,0,90,0);
  pop()
// hour 
  strokeWeight(5);
  stroke("red")
  noFill();
  rotate(-90);
  myhour = map(hr%12,0,12,0,360);
  arc(0, 0, 260, 260, 0, myhour);
push()
    rotate(myhour);
    stroke("red");
    strokeWeight(7);
    line(0,0,60,0);
pop()   
 
    
  

 
  //drawSprites();
}
