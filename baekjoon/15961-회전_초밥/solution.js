const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, d, k, c] = input[0].split(" ").map((c) => +c);
const sushis = input.slice(1, N + 1).map((c) => +c);
const check = new Array(d + 1).fill(0);
check[c] = 1;
let currentCnt = 1;

sushis.slice(0, k).forEach((sushi) => {
  if (!check[sushi]) ++currentCnt;
  ++check[sushi];
});

let maxCnt = currentCnt;

for (let i = 0; i < N; ++i) {
  const start = sushis[i % N];
  const end = sushis[(i + k) % N];

  --check[start];
  if (!check[start]) {
    --currentCnt;
  }
  if (!check[end]) {
    ++currentCnt;
  }
  ++check[end];
  maxCnt = Math.max(maxCnt, currentCnt);
}
console.log(maxCnt);
