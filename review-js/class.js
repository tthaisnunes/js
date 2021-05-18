class humam {
 constructor() {
   this.gender = 'male';
 }

 printGender(){
   console.log(this.gender);
 }
}

class Person extends humam{
  constructor() {
    super();
    this.name = 'Max';
    this.gender = 'female';
  }

  printMyName() {
    console.log(this.name);
  }
}

// call class
const person = new Person();
person.printMyName();
person.printGender();
