console.log("Hello!");
//assignment 1: Array Operations
let fruits=[];
fruits.push('apple', 'banana', 'orange');
fruits.splice(0,1);
fruits.push('grape');
fruits[1] = 'pear';
console.log(fruits); //final fruits array

//assignment 2: Object Operations
let person = {};
person.name = "John";
person.age = 30;
person.city = "New York";
delete person.age; //deletes age
person.job = "Engineer"; //add
person.city = "San Francisco"; //update
console.log(person); //final person object

//assignment 3: Array of Objects Operations
let cars = [];
cars.push(
    {make: 'Toyota', model: 'Camry', year: 2018},
    {make: 'Toyota', model: 'Camry', year: 2018},
    {make: 'Toyota', model: 'Camry', year: 2018});
cars.splice(0, 1);
cars.push({make: 'Honda', model: 'Civic', year: 2020});
cars[1].model = 'Accord'; //update model property
console.log(cars); //final cars array