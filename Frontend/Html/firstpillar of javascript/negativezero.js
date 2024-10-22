let x = -0;
console.log(x === 0);

console.log(Object.is(x, -0));
console.log(Object.is(x, 0));

console.log(Math.sign(-3));
console.log(Math.sign(2));
console.log(Math.sign(-0));
console.log(Math.sign(0));

console.log(x < 0);