//Arrays

var person = [];
person.name = "Mrs. White";

var who = person.name;

person[0] = "I was not in the Billiards room";

console.log(person);

console.log("***************************************************");

var person = [];
var plea = "wouldShe";
person.name = "Mrs. White";

var who = person.name;

person[plea] = "I would never!";

console.log(person);

person["plea"] = "I think so";

console.log(person.plea);

console.log("***************************************************");

// Non-valid Characters

var box = {};

box["material"] = "cardboard";
box[0] = "meow";
box["^&*"] = "testing 123";

var test = box["^&*"];

console.log(box);

console.log("***************************************************");

// Game Characters Challenge

// Create an object using bracket and dot notation that represents the characters and 
// related data you may find in a game of Clue

var game = {};

game.murderer = "??";
game["weapons"] = [
  { type:"laser", location: "lab"},
  "angry cats",
  "dish soap",
]

game.name = [];
game.name[0] = "Miss Scarlet";
game.name.push('Mr. Green');

console.log(game);

console.log("***************************************************");

  // ES6 Destructuring

const [first, second] = [true, false]; // In arrays must be in order
console.log(first, second);

var obj = {firstProperty: 'Dan', secondProperty: 'Coelho'};
const {secondProperty, firstProperty} = obj; // order does'nt matter in objects
console.log(firstProperty, secondProperty);

const myObj = { 'name': 'Rusty', 'room': 'kitchen', 'weapon': 'candlestick'};
const {room, weapon} = myObj;
console.log(room, weapon);


//Destructuring Arrays

var [a, b] = [1, 2];
console.log(a, b);  
// => 1 2

//omit certain values
var [a, , b] = [1, 2, 3];
console.log(a, b);
// => 1 3

//combine with spread/rest operator (accumulates the rest of the values)
var [a, ...b] = [1, 2, 3, 4, 5]
console.log(a, b);
// => 1 [ 2, 3, 4, 5 ]

//swap variables easily without temp
var a = 1, b = 2;
// var temp = a;
//  a = b;
//  b = temp;

var [b, a] = [a, b];
console.log(a, b);
// => 2 1

// Advance deep nested arrays 
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]]
console.log("a:", a, "b:", b, "c:", c, "d:", d);
// => a: 1 b: 2 c: [ [ 3, 4 ], 5 ] d: 6

// === Objects

var { user: x} = { user: 5};
console.log(x);
// => 5

// Fail-safe
var {user: x} = {user2: 5};
console.log(x);
// => undefined

// More values
var { prop: x, prop2: y} = { prop: 5, prop2: 10 };
console.log(x, y);
// => 5 10
