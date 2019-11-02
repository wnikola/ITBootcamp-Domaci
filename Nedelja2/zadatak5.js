let pizzaPrice = 120;
let diameter = 32; // centimeters
let radius = diameter / 2;
const pi = 3.14;

let pricePerCentimer = pizzaPrice / (radius ** 2 * pi);

console.log(pricePerCentimer);