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

