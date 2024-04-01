// unary operators.... (pre increment, post increment & pre decrement, post decrement)
// let a = 5;
// let b = 2;
// let c = [a++];
// console.log(c)
let a: number = 5;
let b: number = 2;
let c: number;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);