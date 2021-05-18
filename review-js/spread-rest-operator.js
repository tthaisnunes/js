// spread array
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);


// spread obj
const person = {
  name: 'max' 
};

const newPerson = {
  ...person,
  age: 27
}

console.log(newPerson);


// rest operator
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));