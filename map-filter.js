const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

const square = numbers.map(x => x ** 2);
console.log(square);

const biggerNumber = square.filter(x => x > 40);
console.log(biggerNumber);

const findNumber = biggerNumber.find(x => x > 50);
console.log(findNumber);
