
var  car  , car2 ,car3,car4, wall ;
 var fm = randomNumber(30,95) ;

// var rand = randomNumber(30,95);

function setup() {

  createCanvas(1600,400);
 
  car  =  createSprite(100, 100, 15, 10);
  car.velocityX = 1  ;
  car.shapeColor = "white "

  car2 = createSprite(100,200,15,10)  
  car2.velocityX = 6;
  car2.shapeColor = "white "
  

  car3  =  createSprite(100, 300, 15, 10);
  car3.velocityX = 8  ;
  car3.shapeColor = "white "

  car4 = createSprite(100,380,15,10)  
  car4.velocityX = 9;
  car4.shapeColor = "white "



  wall = createSprite (1200,400, 40 ,800);
 // wall.shapeColour  = " Blue " ;
  //wall.shapeCsolour(80,80,80);
  wall.shapeColor = "blue";
    
///text.fill = "red";
}

 function draw() {

   background( " black");  
    

   text(" car A  ",100 ,70 );
   text(" car B  ",100 ,170 )
   text(" car C ",100 ,270 )
   text(" car D  ",100 ,350 )

   text(" SPEED = 1 ",800 ,70 );
   text(" SPEED = 60  ",800 ,170 )
   text(" SPEEED = 80 ",800 ,270 )
   text(" SPEED = 90 AND ABOVE  ",800 ,350 )







  car3.collide(wall);
   car4.collide(wall);
     car.collide(wall);
    car2.collide(wall);
    //car.collide(wall);

    


if( car4.x>1150){

car4.shapeColor = "red";
text ("deformation = 180 and above  ",300,370);

}
if( car3.x>1150){

  car3.shapeColor = "yellow";
  text ("deformation = 142 ",300,270);
  
  }
  if( car2.x>1150){

    car2.shapeColor = "green ";
    text ("deformation = 80 ",300,170);
    
    }

    if( car4.x>1150){

      car4.shapeColor = "green ";
      text ("deformation = 1 ",300,70);
      
      }

  drawSprites();
}






