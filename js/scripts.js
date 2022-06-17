// Business logic

const firstPizza = new Pizza();

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
  $("form#").submit(function(event) {
  event.preventDefault();

  const size = $("input:radio[name=size]:checked").val();

  let toppings = $("input:checkbox[name=toppings-checkbox]:checked").val();
  
  });
});