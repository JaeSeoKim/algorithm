const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * @type {string[]}
 */
const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution();
});

function solution() {
  const [V, E] = input[0].split(" ").map((c) => +c);
  const tree = input.slice(1, 1 + E).map((line) => {
    const [a, b, c] = line.split(" ").map((c) => +c);
    return [a, b, c];
  });
  tree.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: V + 1 }).map((_, i) => i);

  const find = (a) => {
    if (parent[a] === a) return a;
    return (parent[a] = find(parent[a]));
  };

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

  let answer = 0;
  for (let [a, b, c] of tree) {
    if (find(a) !== find(b)) {
      union(a, b);
      answer += c;
    }
  }

  console.log(answer);
}
