const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, Q] = input[0].split(" ").map((c) => +c);

/**
 * Union-Find 알고리즘을 수행하기 위한 Tree 정보를 담는 배열
 *
 * @type {[number, number, number][]} parent, child, USADO
 */
const tree = [];
input.slice(1, N).forEach((line) => {
  tree.push(line.split(" ").map((c) => +c));
});
tree.sort((a, b) => b[2] - a[2]);

/**
 * Union-Find 알고리즘을 수행하여 찾은 부모의 정보를 저장할 배열
 */
const parent = Array.from({ length: N + 1 }).map((_, i) => i);

const queries = input
  .slice(N, N + Q)
  .map((line) => line.split(" ").map((c) => +c));

/**
 * momoization를 통한 속도 개선
 * 해당 memo의 값을 참조하면, 해당 시점에서 탐색 가능한 동영상의 갯수를 노출, 이때 자기 자신도 포함이므로 최종적으로 1빼서 사용할 것.
 */
const memo = new Array(N + 1).fill(1);

/**
 * 부모를 탐색하는 함수
 */
const find = (x) => {
  if (parent[x] === x) return x;
  return (parent[x] = find(parent[x]));
};

const union = (a, b) => {
  a = find(a);
  b = find(b);
  // a, b가 같은 경우 같은 부모를 가지고 있는 것으로 스킵. (이미 union 된 경우)
  if (a === b) return;
  // a가 더 큰 경우 b가 부모
  if (a > b) {
    parent[a] = b;
    // 부모가 가지고 있는 접근 가능한 동영상 갯수를 상속
    memo[b] += memo[a];
  } else {
    parent[b] = a;
    memo[a] += memo[b];
  }
};

const result = {};

queries
  .slice()
  // K의 값이 큰 query부터 연산을 하여, K의 값이 큰 경우의 수 부터 연산하여 저장할 수 있도록 함
  .sort((a, b) => b[0] - a[0])
  .forEach(([k, v]) => {
    // K의 값보다 더 큰 경우에만 추천 대상이기 때문에 K의 값까지만 탐색
    while (tree.length && tree[0][2] >= k) {
      union(tree[0][0], tree[0][1]);
      tree.shift();
    }
    result[`${k}-${v}`] = memo[find(v)] - 1;
  });

console.log(queries.map(([k, v]) => result[`${k}-${v}`]).join("\n"));
