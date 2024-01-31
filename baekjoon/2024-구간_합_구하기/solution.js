const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const meta = input[0].split(" ");

const N = +meta[0];
const M = +meta[1];
const K = +meta[2];
const val = input.slice(1, N + 1).map(BigInt);
const actions = input
  .slice(N + 1, 1 + N + M + K)
  .map((line) => line.split(" ").map(BigInt));

const tree = new Array(N * 4);

function init(start, end, node) {
  if (start === end) return (tree[node] = val[start]);

  const mid = Math.floor((start + end) / 2);

  return (tree[node] =
    init(start, mid, node * 2) + init(mid + 1, end, node * 2 + 1));
}

function update(start, end, node, index, diff) {
  if (start > index || end < index) return;
  tree[node] += diff;
  if (start === end) return;
  const mid = Math.floor((start + end) / 2);
  update(start, mid, node * 2, index, diff);
  update(mid + 1, end, node * 2 + 1, index, diff);
}

function query(start, end, node, left, right) {
  if (left > end || right < start) return 0n;
  if (left <= start && right >= end) return tree[node];
  const mid = Math.floor((start + end) / 2);
  return (
    query(start, mid, node * 2, left, right) +
    query(mid + 1, end, node * 2 + 1, left, right)
  );
}

const answer = [];
init(0, N - 1, 1);
actions.forEach(([a, b, c]) => {
  --b;
  if (a === 1n) {
    const diff = c - val[b];
    val[b] = c;
    update(0, N - 1, 1, b, diff);
    return;
  }
  answer.push(query(0, N - 1, 1, b, c - 1n));
});

console.log(answer.join("\n"));
