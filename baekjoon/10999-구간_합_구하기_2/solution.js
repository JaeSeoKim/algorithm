const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, M, K] = input[0].split(" ").map(Number);
const nums = input.slice(1, N + 1).map(BigInt);
const actions = input
  .slice(N + 1, 1 + N + M + K)
  .map((line) => line.split(" "));

const tree = new Array(N * 4).fill(0n);
const lazy = new Array(N * 4).fill(0n);

const init = (node, start, end) => {
  if (start === end) return (tree[node] = nums[start]);

  const mid = Math.floor((start + end) / 2);
  return (tree[node] =
    init(node * 2, start, mid) + init(node * 2 + 1, mid + 1, end));
};

const propagate = (node, left, right) => {
  tree[node] += BigInt(right - left + 1) * lazy[node];
  if (left !== right) {
    lazy[node * 2] += lazy[node];
    lazy[node * 2 + 1] += lazy[node];
  }
  lazy[node] = 0n;
};

const update = (node, start, end, left, right, diff) => {
  propagate(node, start, end);
  if (right < start || end < left) return;

  if (left <= start && end <= right) {
    lazy[node] += diff;
    propagate(node, start, end);
    return;
  }

  const mid = Math.floor((start + end) / 2);
  update(node * 2, start, mid, left, right, diff);
  update(node * 2 + 1, mid + 1, end, left, right, diff);
  tree[node] = tree[node * 2] + tree[node * 2 + 1];
};

const query = (node, start, end, left, right) => {
  propagate(node, start, end);
  if (right < start || end < left) return 0n;

  if (left <= start && end <= right) return tree[node];

  const mid = Math.floor((start + end) / 2);

  return (
    query(node * 2, start, mid, left, right) +
    query(node * 2 + 1, mid + 1, end, left, right)
  );
};

const answer = [];
init(1, 0, N - 1);

actions.forEach(([a, b, c, d]) => {
  b = +b - 1;
  c = +c - 1;

  if (a === "1") return update(1, 0, N - 1, b, c, BigInt(d));
  answer.push(query(1, 0, N - 1, b, c));
});

console.log(answer.join("\n"));
