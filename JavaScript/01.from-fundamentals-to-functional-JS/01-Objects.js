//Arrays

var person = [];
person.name = "Mrs. White";

var who = person.name;

person[0] = "I was not in the Billiards room";

console.log(person[0], person["name"]);

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
