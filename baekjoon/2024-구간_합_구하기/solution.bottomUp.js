const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const meta = input[0].split(" ");

const N = +meta[0];
const M = +meta[1];
const K = +meta[2];
const nums = input.slice(1, N + 1).map(BigInt);
const actions = input
  .slice(N + 1, 1 + N + M + K)
  .map((line) => line.split(" "));

let size = 1;
while (size < N) {
  size <<= 1;
}
const tree = new Array(2 * size--).fill(0n);

function update(index, diff) {
  index += size;
  while (index) {
    tree[index] += diff;
    index = Math.floor(index / 2);
  }
}

function query(left, right) {
  left += size;
  right += size;
  let sum = 0n;

  while (left <= right) {
    if (left % 2 === 1) {
      sum += tree[left++];
    }
    left = Math.floor(left / 2);

    if (right % 2 === 0) {
      sum += tree[right--];
    }
    right = Math.floor(right / 2);
  }
  return sum;
}
nums.forEach((num, index) => update(index + 1, num));

const answer = [];
actions.forEach(([a, b, c]) => {
  b = +b;
  if (a === "1") {
    update(b, BigInt(c) - tree[b + size]);
    return;
  }
  c = +c;
  answer.push(query(b, c));
});

console.log(answer.join("\n"));
