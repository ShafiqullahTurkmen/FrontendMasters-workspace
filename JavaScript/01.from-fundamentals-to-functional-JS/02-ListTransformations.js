const game = {
  suspects: [
    {
      name: "Rusty",
      color: "orange",
    },
    {
      name: "Miss Scarlet",
      color: "red",
    },
  ],
}

// const arr = Object.values(game);

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// for (let i = 0; i < game.suspects.length; i++) {
//   console.log(game.suspects[i]);
// }
// => { name: 'Rusty', color: 'orange' }
// => { name: 'Miss Scarlet', color: 'red' }

for (const key in game) {
    console.log(...game[key]);
}
// => { name: 'Rusty', color: 'orange' } { name: 'Miss Scarlet', color: 'red' }

const gameLoop = function () {
  for (let i = 0; i < game.suspects.length; i++) {
    console.log('outer loop');
    for (let key in game.suspects[i]) {
      console.log('inner loop');
      if (game.suspects[i][key] === 'Rusty') {
        console.log('Found \'em ');
      } else {
        console.log('next time!');
      }
    }
  }
}

gameLoop();

var  [{color: x}, {color: y}] = [
  {
    name: "Rusty",
    color: "orange",
  },
  {
    name: "Miss Scarlet",
    color: "red",
  },
]

console.log(x, y);
// => orange red
