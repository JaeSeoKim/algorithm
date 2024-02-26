const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
});

function solution(input) {
  const [N, M] = input[0].split(" ").map((c) => +c);
  /**
   * @type {[operation: number, a: number, b: number][]}
   */
  const operations = input
    .slice(1, 1 + M)
    .map((line) => line.split(" ").map((c) => +c));

  const parent = Array.from({ length: N + 1 }).map((_, i) => i);

  const find = (a) => {
    if (parent[a] === a) return a;
    return (parent[a] = find(parent[a]));
  };

  const isUnion = (a, b) => find(a) === find(b);

  const union = (a, b) => {
    a = find(a);
    b = find(b);

    if (a === b) return;
    if (a < b) {
      parent[b] = a;
    } else {
      parent[a] = b;
    }
  };

  const result = [];
  operations.forEach(([operation, a, b]) => {
    if (operation === 0) {
      union(a, b);
    } else if (operation === 1) {
      result.push(isUnion(a, b) ? "YES" : "NO");
    }
  });

  console.log(result.join("\n"));
}
