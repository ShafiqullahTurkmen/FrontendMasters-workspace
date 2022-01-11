const videoData = [
  {
      name: 'Miss Scarlet',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Mrs. White',
      present: false,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Reverend Green',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Rusty',
      present: false,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Colonel Mustard',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  },
  {
      name: 'Professor Plum',
      present: true,
      rooms: [
          {kitchen: false},
          {ballroom: false},
          {conservatory: false},
          {'dining room': false},
          {'billiard room': false},
          {library: false}
      ]
  }
];

const presentPersons = videoData.filter(object => object.present);

const resultObj = presentPersons.map(result => result.name);

console.log(resultObj);

console.log("*************************************************************")

var createTuple = (a,b,c,d) => {
  return [[a,c], [b,d]];
}

var result = createTuple('it', 'be', 'could', 'anyone');
console.log(result);

console.log("*************************************************************")
//Spread and rest

var createTuple = (a,b,c,...d) => {
  return [[a,c], [b,d]];
}

var result = createTuple('it', 'be', 'could', 'anyone', 'no one');
console.log(result);

console.log("*************************************************************")
// Arguments keyword

var createTuple = (a,b,c, ...d) => {
  console.log(arguments);
  return [[a,c], [b,d]];
}

var result = createTuple('it', 'be', 'could', 'anyone', 'no one');
// console.log(result);

console.log("*************************************************************")
// Default Parameters in ES5

var add = function add(a, b) {
  b = b || 2;
  return a + b;
}

var result = add(3);
// output => 5

console.log("*************************************************************")
// Default Parameters in ES6

var add = function(a, b = 2) {
  return a + b;
}

var result = add(3);
// output => 5

console.log("*************************************************************")

// Array-Like Object

var constructArr = function () {
  var arr = Array.prototype.slice.call(arguments);
  arr.push('the billiards room?')
  return arr.join(' ');
}

var result = constructArr('was', 'it', 'in');
console.log(result);
// output => was it in the billiards room?


var constructArr = function () {
  var arr = Array.from(arguments);
  arr.push('the billiards room?')
  return arr.join(' ');
}

var result = constructArr('was', 'it', 'in');
console.log(result);
// output => was it in the billiards room?

console.log("*************************************************************")
// _.from()

var from = arr => {
  return Array.prototype.slice.call(arr);
}


var constructArr = function () {
  var arr = from(arguments);
  arr.push('the billiards room?')
  return arr.join(' ');
}

var result = constructArr('was', 'it', 'in');
console.log(result);
// output => was it in the billiards room?