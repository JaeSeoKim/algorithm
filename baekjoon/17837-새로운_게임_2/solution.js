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
  // →, ←, ↑, ↓
  const directionX = [1, -1, 0, 0];
  const directionY = [0, 0, -1, 1];

  /**
   * 흰색인 경우에는 그 칸으로 이동한다. 이동하려는 칸에 말이 이미 있는 경우에는 가장 위에 A번 말을 올려놓는다.
   * A번 말의 위에 다른 말이 있는 경우에는 A번 말과 위에 있는 모든 말이 이동한다.
   * 예를 들어, A, B, C로 쌓여있고, 이동하려는 칸에 D, E가 있는 경우에는 A번 말이 이동한 후에는 D, E, A, B, C가 된다.
   */
  const WHITE = 0;
  /**
   * 빨간색인 경우에는 이동한 후에 A번 말과 그 위에 있는 모든 말의 쌓여있는 순서를 반대로 바꾼다.
   * A, B, C가 이동하고, 이동하려는 칸에 말이 없는 경우에는 C, B, A가 된다.
   * A, D, F, G가 이동하고, 이동하려는 칸에 말이 E, C, B로 있는 경우에는 E, C, B, G, F, D, A가 된다.
   */
  const RED = 1;
  /**
   * 파란색인 경우에는 A번 말의 이동 방향을 반대로 하고 한 칸 이동한다. 방향을 반대로 한 후에 이동하려는 칸이 파란색인 경우에는 이동하지 않고 방향만 반대로 바꾼다.
   */
  const BLUE = 2;
  /**
   * 체스판을 벗어나는 경우에는 파란색과 같은 경우이다.
   */

  const [N, K] = input[0].split(" ").map((c) => +c);
  const map = input.slice(1, 1 + N).map((line, y) =>
    line.split(" ").map((c, x) => {
      return {
        next: null,
        type: +c,
        x: x,
        y: y,
      };
    })
  );
  const chessPieces = input.slice(1 + N, 1 + N + K).map((line) => {
    const [y, x, direction] = line.split(" ").map((c) => +c);

    const chessPiece = {
      direction: direction - 1,
      next: null,
      prev: null,
    };

    let current = map[y - 1][x - 1];

    while (current.next) {
      current = current.next;
    }
    current.next = chessPiece;
    chessPiece.prev = current;

    return chessPiece;
  });

  let cnt = 0;

  const getLastChessPiece = (current) => {
    while (current.next) {
      current = current.next;
    }
    return current;
  };

  const getChessPiecePosition = (current) => {
    while (current.prev) {
      current = current.prev;
    }
    return current;
  };

  const swapDirection = (chessPiece) => {
    if (chessPiece.direction === 0) {
      return (chessPiece.direction = 1);
    }
    if (chessPiece.direction === 1) {
      return (chessPiece.direction = 0);
    }
    if (chessPiece.direction === 2) {
      return (chessPiece.direction = 3);
    }
    return (chessPiece.direction = 2);
  };

  const countChesses = (x, y) => {
    let cnt = 0;
    let current = map[y][x];
    while (current.next) {
      current = current.next;
      ++cnt;
    }
    return cnt;
  };

  const moveChessPices = (chessPiece, x, y) => {
    if (x < 0 || N <= x || y < 0 || N <= y || map[y][x].type === BLUE) {
      return [
        x - directionX[chessPiece.direction],
        y - directionY[chessPiece.direction],
      ];
    }
    chessPiece.prev.next = null;
    chessPiece.prev = null;

    if (map[y][x].type === RED) {
      let temp = null;
      let current = chessPiece;

      while (current) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
      }
      if (temp) {
        chessPiece = temp.prev;
      }
    }

    chessPiece.prev = getLastChessPiece(map[y][x]);
    chessPiece.prev.next = chessPiece;
    return [x, y];
  };

  while (++cnt <= 1000) {
    for (const chessPiece of chessPieces) {
      const { x, y } = getChessPiecePosition(chessPiece);

      let nextX = x + directionX[chessPiece.direction];
      let nextY = y + directionY[chessPiece.direction];

      if (
        nextX < 0 ||
        N <= nextX ||
        nextY < 0 ||
        N <= nextY ||
        map[nextY][nextX].type === BLUE
      ) {
        swapDirection(chessPiece);
        nextX = x + directionX[chessPiece.direction];
        nextY = y + directionY[chessPiece.direction];
      }

      [nextX, nextY] = moveChessPices(chessPiece, nextX, nextY, {
        swapDirectionRequired: true,
      });

      if (countChesses(nextX, nextY) >= 4) {
        console.log(cnt);
        return;
      }
    }
  }
  console.log(-1);
}
