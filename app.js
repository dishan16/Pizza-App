var totalPriceArray = [];
function Order (customSize, cheese) {
  console.log(2,customSize,cheese);                                                                                                                   
  this.customSize = customSize;
  this.sauce = 1;
  this.cheese = cheese;
  this.veggie1 = 1;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  this.veggie2 = 1;
  this.meat = 2;
  this.pizzaPrice = 0;
  this.sidePrice = 3;
}
Order.prototype.pizzaCost = function () {
  if (this.customSize === "Small 10 in.") {
    this.pizzaPrice += 6;
  } else if (this.customSize === "Medium 14 in.") {
    this.pizzaPrice += 9;
  } else if (this.customSize === "Large 18 in.") {
    this.pizzaPrice += 12;
  }
  if (this.cheese === "cheese") {
    this.pizzaPrice += 1;
  } else if (this.cheese === "light cheese") {
    this.pizzaPrice += 0.5;
  } else if (this.cheese === "extra cheese") {
    this.pizzaPrice += 1.5;
  }
  this.pizzaPrice += this.sauce;
  this.pizzaPrice += this.veggie1;
  this.pizzaPrice += this.veggie2;
  this.pizzaPrice += this.meat;
  return this.pizzaPrice;
}

Order.prototype.finalCost = function () {
  var cartTotalPrice = 0;
  for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement ++) {
    cartTotalPrice += totalPriceArray[arrayElement]; 
  }
  return cartTotalPrice;
}
      
      $("form#custom-pizza").submit(function(event) {
        event.preventDefault();
        
        var customSize = $("select#size").val();
        var sauce = $("select#sauce").val();
        var cheese = $("select#cheese").val();
        var veggie1 = $("select#veggie1").val();
        var veggie2 = $("select#veggie2").val();
        var meat = $("select#meat").val();
        var pizzaDetails = (customSize + " - " + sauce + ", " + cheese + ", " + veggie1 + ", " + veggie2 + ", " + meat);
        var newPizzaOrder = new Order(customSize, cheese);
        console.log(1,pizzaDetails)
        newPizzaOrder.pizzaCost();
        totalPriceArray.push(newPizzaOrder.pizzaPrice);
        $("#pizza-details-dropdown").show();
        $("#final-cost").text(newPizzaOrder.finalCost());
        console.log(newPizzaOrder.finalCost());
        
        $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
        $("#size, #sauce, #cheese, #veggie1, #veggie2, #meat").val("");
      });
      $("#pizza-details-dropdown").click(function() {
        $("#pizza-details").toggle();
      
      });
      $("#checkout-btn").click(function(event) {
       event.preventDefault();
       let email = prompt("Enter your email: "); 
       console.log(email);

       let name = prompt("Enter your name: "); 
       console.log(name);
       
       // // window.alert(`ok`);
        // // $("#show").on("click", function () {
        //   $("#myForm").show();
        // // });
      
      });