"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// unary operators.... (pre increment, post increment & pre decrement, post decrement)
// let a = 5;
// let b = 2;
// let c = [a++];
// console.log(c)
let a = 5;
let b = 2;
let c;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);
