TDD

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const firstPizza = new Pizza(["Chicken", "Pineapple"], "Large");
Expected Output: Pizza { toppings: ["Chicken", "Pineapple"], size: "Large" }

Describe: this.costOfSize()

Test: "It should return the corresponding cost based on the pizza size"
Code: const firstPizza = new Pizza(["Chicken", "Pineapple"], "Large");
Expected Output: 7

Describe: this.costOfToppings()

Test: "It should return the corresponding cost based on the number of toppings on the pizza"
Code: const firstPizza = new Pizza(["Chicken", "Pineapple"], "Large");
Expected Output: 4

Describe: this.totalCost()

Test: "It should return the total cost of the pizza based on the size and number of toppings"
Code: const firstPizza = new Pizza(["Chicken", "Pineapple"], "Large");
Expected Output: 11