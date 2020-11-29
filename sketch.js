//declaring the car and wall variables
var car,wall,CI;

//declaring the speed and weight variables
var CarSpeed,CarWeight;

var CarDeformationTrue;



function setup() {
  createCanvas(1600,400);
  
  CarSpeed = random(55,90);
  CarWeight = random(400,1500);

  car=createSprite(50,200,50,50);
  car.shapeColor = "white";
  car.velocityX = CarSpeed;

  wall = createSprite(1500,200,60,400);
  wall.shapeColor = "gray";
}

function draw() {
  background("black");  
  
  textSize(20);
  fill("blue");
  //stroke("pink");
  text("Car Test Statistics :- ",400,50);

  textSize(20);
  fill("blue");
  //stroke("pink");
  text("Weight of the car = "+Math.round(CarWeight) + "kg",400,70);

  textSize(20);
  fill("blue");
  //stroke("pink");
  text("Speed of the car = "+Math.round(CarSpeed) + "kmph",400,90);

  textSize(20);
  fill("blue");
  
  text("~Deformation = "+ Math.round(CarDeformationTrue) + "units", 400,110);

  

     CarDeformationTrue = (0.5 * CarWeight * CarSpeed * CarSpeed)/22500;


     if(wall.x-car.x < -0.0001) {
       car.velocityX = 0.00;

       if(CarDeformationTrue < 100) {
        car.shapeColor = rgb(0,255,0);
        textSize(20);
        fill("green");
        text("Good !!!",800,200);
        }
 
        else if(CarDeformationTrue > 100 && CarDeformationTrue < 180) {
          car.shapeColor = rgb(230,230,0);

          textSize(20);
        fill("yellow");
        text("Average !!",800,150);
        }
 
        else if(CarDeformationTrue > 180) {
          car.shapeColor = rgb(255,0,0);

          textSize(20);
        fill("red");
        text("LETHAL !",800,100);
        }
     }
     

  drawSprites();
  }

  
