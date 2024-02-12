const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [S, P] = input[0].split(" ").map((c) => +c);
const DNAString = input[1].split("");
const [A, C, G, T] = input[2].split(" ").map((c) => +c);

let count = 0;

let slide = {
  A: 0,
  C: 0,
  T: 0,
  G: 0,
};

DNAString.slice(0, P).forEach((c) => ++slide[c]);
const checkDNAString = () => {
  if (slide.A >= A && slide.C >= C && slide.G >= G && slide.T >= T) {
    ++count;
  }
};
checkDNAString();

for (let i = P; i < S; ++i) {
  --slide[DNAString[i - P]];
  ++slide[DNAString[i]];
  checkDNAString();
}

console.log(count);
