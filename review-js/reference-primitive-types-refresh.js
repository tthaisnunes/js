const person = {
  name: 'Max'
};

const secondPerson = person;
const secondPersonCopyObj = { ...person};

person.name = 'Manu';

console.log(secondPerson);
console.log(secondPersonCopyObj);