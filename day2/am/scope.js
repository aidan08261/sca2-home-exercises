// Part 1:
//  - What will print and why? 
//1
//2
//undefined
//It prints undefined because the variable "a" isn't given a vulue in the "x" function

// Part 2:
// - change to ES6 syntax

// Part 3:
// - modify so that it prints 1, 2, 2 in that order. Console.logs must stay in place.

const x=() => {
  console.log(a);
}

const y=() => {
  a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();
