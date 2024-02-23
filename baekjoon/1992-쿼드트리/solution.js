const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const len = +input[0];
const map = input.slice(1, len + 1).map((line) => line.split(""));

const quadTree = ([x, y], size) => {
  for (let i = x; i < x + size; ++i) {
    for (let j = y; j < y + size; ++j) {
      if (map[y][x] !== map[j][i]) {
        const halfSize = Math.floor(size / 2);
        let result = "(";
        result += quadTree([x, y], halfSize);
        result += quadTree([x + halfSize, y], halfSize);
        result += quadTree([x, y + halfSize], halfSize);
        result += quadTree([x + halfSize, y + halfSize], halfSize);
        result += ")";
        return result;
      }
    }
  }
  return map[y][x];
};

console.log(quadTree([0, 0], len));
