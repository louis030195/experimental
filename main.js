// main.js
console.log('hello from github!');

function add(a, b) {
  return a + b;
}

console.log('2 + 3 =', add(2, 3));

let message = 'the answer to life, the universe, and everything is';
console.log(message, 42);

// testing some basic js features
let array = [1, 2, 3, 4, 5];
console.log('array sum:', array.reduce((a, b) => a + b, 0));

// simple object
let person = {
  name: 'alice',
  age: 30,
  sayHi: function() {
    console.log(`hi, i'm ${this.name} and i'm ${this.age} years old.`);
  }
};

person.sayHi();

console.log('script execution completed!');
