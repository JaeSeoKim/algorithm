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
  const [N, M] = input[0].split(" ").map((c) => +c);
  if (input[1][0] === "0") return console.log(M);

  const parties = input
    .slice(2, 2 + M)
    .map((line) => line.split(" ").map((c) => +c));
  const parent = Array.from({ length: N + 1 }).map((_, i) => i);
  const knowingTheTruth = input[1]
    .split(" ")
    .map((c, i) => {
      if (i !== 0) parent[+c] = 0;
      return +c;
    })
    .slice(1);

  const find = (x) => {
    if (parent[x] === x) return x;
    return (parent[x] = find(parent[x]));
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

  parties.forEach(([_, ...peoples]) => {
    for (let i = 1; i < peoples.length; ++i) {
      union(peoples[i - 1], peoples[i]);
    }
  });

  console.log(
    parties.filter(([_, ...peoples]) => !peoples.find((x) => find(x) === 0))
      .length
  );
}
