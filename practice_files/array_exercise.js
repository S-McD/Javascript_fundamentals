// EXERCISE ONE

const names = ['Jo', 'Boma', 'Annie', 'Billy'];

console.log(names.length)
console.log(names[1])

const addName = names.concat('Jervis')

console.log(addName);

// EXERCISE TWO

const numbers = [1,2,3,4,5,6,7,8,9,10];
let result = 0;
numbers.forEach(number => {
    result += number;
})

console.log(result);

// EXERCISE TWO ALTERNATIVE

let sum = numbers.reduce(function (a, b) {
  return a + b;
}, 0);
console.log(sum);