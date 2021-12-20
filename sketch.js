var Apple, Book, Laptop, Movies, Orange, PC, Phone, Tablet, Paper
var Apple1, Book1, Laptop1, Movies1, Orange1, PC1, Phone1, Tablet1
var gameState, number, number2, computer
var computerFav
var sprite1, sprite2

function preload(){
  Apple1 = loadImage("Apple.png")
  Book1 = loadImage("Book.png")
  Laptop1 = loadImage("Laptop.png")
  Movies1 = loadImage("Movies.png")
  Orange1 = loadImage("Orange.png")
  PC1 = loadImage("PC.png")
  Phone1 = loadImage("Phone.png")
  Tablet1 = loadImage("Tablet.png")
  Paper = loadImage("Background.jpg")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  gameState = 1
  number = 0
  number2 = 0
  spriteGroup1 = new Group();
  spriteGroup2 = new Group();
  
}

function draw() {
  background(Paper);
  drawSprites()
  Paper.size = 3  

  if(gameState === 1){
    gameState1()
  }
  if(gameState === 2){
    gameState2()
  }
  if(gameState === 3){
    gameState3()
  }
  if(gameState === 4){
    gameState4()
  }
  



}


function ifNumber2(){
  if(keyDown("space")){
     sprite1 = createSprite(width-300,height/2)
    number2 = Math.round(random(1,8))
    switch (number2){
        case 1: sprite1.addImage(Apple1)
        sprite1.scale = 0.5
        break;
        case 2: sprite1.addImage(Book1)
        sprite1.scale = 0.5
        break;
        case 3: sprite1.addImage(Laptop1)
        sprite1.scale = 1
        break;
        case 4: sprite1.addImage(Movies1)
        sprite1.scale = 0.5
        break;
        case 5: sprite1.addImage(Orange1)
        sprite1.scale = 0.2
        break;
        case 6: sprite1.addImage(PC1)
        sprite1.scale = 0.5
        break;
        case 7: sprite1.addImage(Phone1)
        sprite1.scale = 0.5
        break;
        case 8: sprite1.addImage(Tablet1)
        sprite1.scale = 0.5
        break;
    }
    spriteGroup1.add(sprite1);
  }
}
function ifNumber(){
  if(keyDown("space")){
     sprite2 = createSprite(width/6-200,height/2)
    number = Math.round(random(1,8))
    switch (number){
        case 1: sprite2.addImage(Apple1)
        sprite2.scale = 0.5
        break;
        case 2: sprite2.addImage(Book1)
        sprite2.scale = 0.5
        break;
        case 3: sprite2.addImage(Laptop1)
        sprite2.scale = 1
        break;
        case 4: sprite2.addImage(Movies1)
        sprite2.scale = 0.5
        break;
        case 5: sprite2.addImage(Orange1)
        sprite2.scale = 0.2
        break;
        case 6: sprite2.addImage(PC1)
        sprite2.scale = 0.5
        break;
        case 7: sprite2.addImage(Phone1)
        sprite2.scale = 0.5
        break;
        case 8: sprite2.addImage(Tablet1)
        sprite2.scale = 0.5
        break;
    }
    spriteGroup2.add(sprite2);
  }
}
function gameState1(){
  if(gameState === 1){
    ifNumber2()
    ifNumber() 
    textSize(100)
    text("Press Space To Start.", width/2-400, height/2);
    computer = Math.round(random(1,2))
     if(keyDown("space")){
       gameState = 2
      }
    }
}

function gameState2(){
  if(gameState === 2){
    textSize(100)
    text("Pick The Item The Computer Chooses. A For Right One. B For Left One.", width/2-1600, height/2-600)
    if(computer === 1){
     sprite1 = computerFav
     }
    if(computer === 2){
       sprite2 = computerFav
     }
     if(sprite1 === computerFav){
       if(keyDown("a")){
         gameState = 3
       }
       if(keyDown("b")){
         gameState = 4
       }
     }
     if(sprite2 === computerFav){
       if(keyDown("b")){
         gameState = 3
       }
       if(keyDown("a")){
         gameState = 4
       }
     }
   }

}

function gameState3(){
  textSize(100)
  text("YOU WIN!",width/2-200,height/2) 
}

function gameState4(){
  textSize(100)
  text("YOU LOSE!", width/2-200,height/2)
}