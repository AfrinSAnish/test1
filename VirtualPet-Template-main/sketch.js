var dog,sadDog,happyDog;
var feed,add;
var database;
var foodS = 10;
var foodStock = 10;
var lastFed = 0;
var foodObj = null;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  database=firebase.database()

  foodObj = new Food();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("FEED THE DOG.")
  feed.position(600,95)
  feed.mousePressed(feedDog)

  add = createButton("ADD THE FOOD.")
  add.position(800,95)
  add.mousePressed(addFoods)
}

function draw() {
  background(46,139,87);

  drawSprites();

  foodObj.display();

 // lastFed = database.ref(FeedTime)
 // FeedTime.on('value',function(data){
 //   lastFed = data.val();
 // })

  fill("white");
  textSize(15);
  if(lastFed>=12){
    text("Last Fed (approx timing) : "+ lastFed%12 + " PM", 350,80);
   }else if(lastFed==0){
     text("Last Fed (approx timing) : 12 AM",350,80);
   }else{
     text("Last Fed (approx timing) : "+ lastFed + " AM", 350,80);
   }


}

//function to read food Stock

function readstock(data){
	foodS = data.val();
	foodObj.updateFoodStock(foodS);
	}


function feedDog(){
  if(foodS > 0){
    if(foodS > 0){
    //  dog.changeAnimation("dog2", happyDog);
      foodS--;
      foodObj.updateFoodStock(foodS);
      lastFed = hour();
      foodObj.updateLastFed(lastFed);
}
}
}

//function to update food stock and last fed time

function addFoods(){
  foodS++;
  foodObj.updateFoodStock(foodS);
}

//function to add food in stock
//function feed(){
 // dog.addImage(happyDog);

//  if(foodObj.getFoodStock()<=0){
 //   foodObj.updateFoodStock(foodObj.getFoodStock()*0)
 // }else{
 //   foodObj.updateFoodStock(foodObj.getFoodStock()*-1)
//  }
//}
