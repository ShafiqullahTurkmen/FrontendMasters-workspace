//.map() Function

const weapons  = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = (item) => {
    return `broken ${item}`;
}

const result = _.map(weapons, makeBroken)

console.log(result);
// => ['broken candlestick', 'broken lead pipe', 'broken revolver']