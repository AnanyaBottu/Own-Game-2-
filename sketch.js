var rect1;

function preload(){
  bgImage=loadImage("road.jpg");
  carImg1 = loadImage("car1.png");
  carImg2 = loadImage("car2.png");
  carImg3 = loadImage("car3.png");
  carImg4 = loadImage("car4.png");

  rightcarImg1 = loadImage("rightcar1.png");
  rightcarImg2 = loadImage("rightcar2.png");
  rightcarImg3 = loadImage("rightcar3.png");
  rightcarImg4 = loadImage("rightcar4.png");

  topcarImg1 = loadImage("topcar1.png");
  topcarImg2 = loadImage("topcar2.png");
  topcarImg3 = loadImage("topcar3.png");
  topcarImg4 = loadImage("topcar4.png");

  bottomcarImg1 = loadImage("bottomcar1.png");
  bottomcarImg2 = loadImage("bottomcar2.png");
  bottomcarImg3 = loadImage("bottomcar3.png");
  bottomcarImg4 = loadImage("bottomcar4.png");
 
}




function setup() {
  createCanvas(displayWidth-10,displayHeight-120);
  rect1=new TrafficLight(500,30,40,0);
  rect2=new TrafficLight(985,170,40,90); 
  rect3=new TrafficLight(850,610,40,180);
  rect4=new TrafficLight(365,470,40,270); 

 // leftGroup=new Group();
  //createSprite(400, 200, 50, 50);
  /*
  

  Amb=new Ambulance(180,240,20,20);
  
  
  car2=new LeftCar(20,250,20,20);
  car3=new LeftCar(450,250,20,20);


  car4=new RightCar(830,330,20,20);
  car5=new RightCar(1000,330,20,20)
  car6=new RightCar(1170,330,20,20);


  car7=new BottomCar(600,570,20,20);
  car8=new BottomCar(600,460,20,20);


  car9=new TopCar(685,10,20,20);
  //car10=new TopCar(685,120,20,20);

  
*/
  





}

function draw() {
  background(bgImage);
  /*
  if(keyIsDown(32)){
    car1.x=car1.x+10;
}
  //background("white"); 
   
 

  Amb.display();
  
  //car1.display();
  car2.display();
  car3.display();
  car4.display();
  car5.display();
  car6.display();
  car7.display();
  car8.display();
  car9.display();
  //car10.display();

  for(var i=0;i<leftGroup.length;i++){
    for(var i=0;i<rightGroup.length;i++){

    if(leftGroup.get(i).isTouching(rightGroup.get(i))){
      
    }
  }
  */
  
 rect1.display();
 rect2.display();
 rect3.display();
 rect4.display();
  spawnFromLeft();
  spawnFromRight();
  spawnFromTop();
  spawnFromBottom();
  drawSprites();
}

function spawnFromLeft(){
  if(frameCount%100===0){
    leftcar=createSprite(0,275,20,20);
    leftcar.velocityX=3;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:leftcar.addImage(carImg1);
      break;
      case 2:leftcar.addImage(carImg2);
      break;
      case 3:leftcar.addImage(carImg3);
      break;
      case 4:leftcar.addImage(carImg4);
      break;
    }
    //leftGroup.add(leftcar)
  }
}


function spawnFromRight(){
  if(frameCount%100===0){
    rightcar=createSprite(1500,350,20,20);
    rightcar.velocityX=-3;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:rightcar.addImage(rightcarImg1);
      break;
      case 2:rightcar.addImage(rightcarImg2);
      break;
      case 3:rightcar.addImage(rightcarImg3);
      break;
      case 4:rightcar.addImage(rightcarImg4);
      break;
    }
   
  }
}


function spawnFromTop(){
  if(frameCount%100===0){
    topcar=createSprite(720,0,20,20);
    topcar.velocityY=3;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:topcar.addImage(topcarImg1);
      break;
      case 2:topcar.addImage(topcarImg2);
      break;
      case 3:topcar.addImage(topcarImg3);
      break;
      case 4:topcar.addImage(topcarImg4);
      break;
    }
   
  }
}


function spawnFromBottom(){
  if(frameCount%100===0){
    bottomcar=createSprite(650,600,20,20);
    bottomcar.velocityY=-3;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:bottomcar.addImage(bottomcarImg1);
      break;
      case 2:bottomcar.addImage(bottomcarImg2);
      break;
      case 3:bottomcar.addImage(bottomcarImg3);
      break;
      case 4:bottomcar.addImage(bottomcarImg4);
      break;
    }
   
  }
}