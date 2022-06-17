// Business logic


function Pizza(toppings, size) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.costOfSize = function () {
  let costOfSize = 0;
  if (this.size === "Small") {
    costOfSize += 5;
  } else if (this.size === "Medium") {
    costOfSize += 6;
  } else if (this.size === "Large") {
    costOfSize += 7;
  } else {
    costOfSize += 10;
  }
  return costOfSize;
};

Pizza.prototype.costOfToppings = function(){
  let costOfToppings = 0;
  if (this.toppings.length === 1) {
    costOfToppings += 2;
  } else if (this.toppings.length === 2) {
    costOfToppings += 4;
  } else if (this.toppings.length === 3) {
    costOfToppings += 6;
  } else if (this.toppings.length === 4) {
    costOfToppings += 8;
  } else {
    costOfToppings += 10;
  }
  return costOfToppings;
};

Pizza.prototype.totalCost = function(){
  return this.costOfSize() + this.costOfToppings();
};

// UI logic


$(document).ready(function() {
  $("form#pizza-selections").submit(function(event) {
    event.preventDefault();
    
    const inputtedSize = $("input:radio[name=size]:checked").val();

    const inputtedToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      inputtedToppings.push($(this).val());
    });

    $("#total").html(`Nice creation, we love your pizza! Your total is $${this.totalCost}."`);

    let firstPizza = new Pizza(inputtedToppings, inputtedSize);
    
  });
});