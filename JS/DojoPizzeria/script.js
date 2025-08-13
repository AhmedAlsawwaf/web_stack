function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let Pizza ={
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings,
        describe: function() {
            console.log(`A ${this.crustType} crust pizza with ${this.sauceType} sauce, ${this.cheeses} cheese, and toppings: ${this.toppings.join(', ')}`);
        }
    }
    return Pizza;
}

let pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
let pizza2 = pizzaOven("hand tossed", "bbq", "feta", ["mushrooms", "olives"]);

let pizza3 = pizzaOven("thin", "pesto", "parmesan", ["chicken", "tomatoes"]);
let pizza4 = pizzaOven("gluten-free", "garlic", "cheddar", ["bacon", "jalapenos"]);

pizza1.describe();
pizza2.describe();
pizza3.describe();
pizza4.describe();

// Bonus: random Pizza
function randomPizza() {
    let crustTypes = ["thin", "deep dish", "hand tossed", "gluten-free"];
    let sauceTypes = ["traditional", "pesto", "garlic", "bbq"];
    let cheeses = ["mozzarella","cheddar","parmesan","feta"];
    let toppings = [
        ["pepperoni", "sausage"],
        ["mushrooms", "olives"],
        ["chicken", "tomatoes"],
        ["bacon", "jalapenos"],
        ["onions", "mushrooms"]
    ];

    let randomCrust = crustTypes[Math.floor(Math.random() * crustTypes.length)];
    let randomSauce = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
    let randomCheeses = cheeses[Math.floor(Math.random() * cheeses.length)];
    let randomToppings = toppings[Math.floor(Math.random() * toppings.length)];

    return pizzaOven(randomCrust, randomSauce, randomCheeses, randomToppings);
}

console.log("Random Pizza:");
let randomPizza1 = randomPizza();
randomPizza1.describe();