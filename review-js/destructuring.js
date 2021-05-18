// array desctructuring
const numbers = [1, 2, 3, 4];
[num1, ,num3] = numbers;
console.log(num1, num3);

// obj destructuring
{name} = {name: 'Max', age: 28};
console.log(name); // Max
console.log(age) // undefined