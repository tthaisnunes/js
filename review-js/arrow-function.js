// arrow function without parans
const printMyName = () => {
  console.log('Thais');
}
printMyName();
 

// arrow function with one param
const printName = name => {
  console.log(name);
}
printName('Max');


// arrow function with multiples parans
const printUserData = (name, age) => {
  console.log(`user name: ${name} | user age: ${age}`);
} 
printUserData('thais', 27);


// arrow function shorthand
const multiply = number => number * 2;
console.log(multiply(2));


