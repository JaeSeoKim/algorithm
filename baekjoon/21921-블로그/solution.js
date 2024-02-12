const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, X] = input[0].split(" ").map((c) => +c);
const visitedCount = input[1]
  .split(" ")
  .slice(0, N + 1)
  .map((c) => +c);

let count = 1;
let slide = visitedCount.slice(0, X).reduce((acc, v) => acc + v, 0);
let max = slide;

for (let i = X; i < N; ++i) {
  slide += -visitedCount[i - X] + visitedCount[i];
  if (max === slide) ++count;
  else if (max < slide) {
    max = slide;
    count = 1;
  }
}

if (max === 0) console.log("SAD");
else {
  console.log([max, count].join("\n"));
}
