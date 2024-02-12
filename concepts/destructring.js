const person = {
    name: 'John',
    age: 32,
    city: 'New York',
    country: 'USA'
  };
  
const { name, age } = person;

// Object destructuring with alias
const { name: firstName, age: years } = person;

// Array destructuring
const fruits = ['apple', 'banana', 'orange'];
const [first, second, third] = fruits;
