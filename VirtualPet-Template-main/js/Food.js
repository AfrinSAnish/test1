class Food{
    constructor(){
      //  this.foodStock = 20;
        this.lastFed = 0;

        this.image= loadImage("images/milk.png");
    
    }

    getFoodStock(){
        var getStockref = database.ref('FoodStock')
        getStockref.on("value",function(data){
        })
    }


    updateFoodStock(food){
        database.ref('/').update({
        foodStock :food
        })
    }


    display(){
        var x = 80, y = 100;
        imageMode(CENTER);
        if(foodStock != 0){
           // console.log("PODA")
            for(var i = 0; i < foodStock; i++){
                if(i % 10 === 0){
                   x = 80;
                   y += 50;
                }
                image(this.image, x, y, 50, 50);
                x += 30;
            }
    }
}
}