const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = +input[0];
const M = +input[1];
const tree = Array.from({ length: N + 1 }, (_) => []);
input
  .slice(2, M + 2)
  .map((line) => line.split(" ").map((c) => +c))
  .map(([start, end, cost]) => {
    tree[start].push([end, cost]);
  });
const [start, end] = input[M + 2].split(" ").map((c) => +c);
const costs = new Array(N + 1).fill(Number.POSITIVE_INFINITY);
costs[start] = 0;

const queue = [[start, 0]];
while (queue.length) {
  const [current, currentCost] = queue.shift();
  if (costs[current] < currentCost) continue;
  for (let [next, nextCost] of tree[current]) {
    if (costs[next] > currentCost + nextCost) {
      costs[next] = currentCost + nextCost;
      queue.push([next, currentCost + nextCost]);
    }
  }
}

console.log(costs[end]);
