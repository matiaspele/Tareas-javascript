let num1 = [23, 56, 3, 67];
let num2 = [100, 456, 2, 347];

let num3 = [...num1, ...num2];

let numMax = Math.max(...num3);

console.log(numMax);
