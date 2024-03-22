# What's Up With Gravity

> <https://www.acmicpc.net/problem/5827>

## 문제

Captain Bovidian is on an adventure to rescue her crew member, Doctor Beefalo. Like all great adventures, this story plays out in a two dimensional N by M grid (1 <= N, M <= 500), representing a side view of the captain's world. Some grid cells are empty while others are blocked and cannot be traversed.

Unfortunately, Captain Bovidian cannot jump. She must obey the following rules of physics while traversing her world.

1. If there is no cell directly underneath Captain Bovidian (that is, if she is at the edge of the grid), then she flies out into space and fails her mission.
   > 보비디안 선장 바로 아래에 셀이 없는 경우(즉, 그리드의 가장자리에 있는 경우), 우주로 날아가 임무에 실패합니다.
2. If the cell directly underneath Captain Bovidian is empty, then she falls into that cell.
   > 보비디안 선장 바로 아래 셀이 비어 있으면 그 셀로 떨어집니다.
3. Otherwise:
   1. Captain Bovidian may move left or right if the corresponding cell exists and is empty.
      > 캡틴 보비디안은 해당 셀이 존재하고 비어 있는 경우 왼쪽이나 오른쪽으로 이동할 수 있습니다.
   2. Or, Captain Bovidian may flip the direction of gravity.
      > 또는 보비디안 선장이 중력의 방향을 뒤집을 수도 있습니다.

When Captain Bovidian changes the direction of gravity, the cell that's 'underneath' her (as mentioned in rules 1 and 2) toggles between the cell with one higher row index and the cell with one lower row index (the first row in the input has index 1, and the last row has index N). Initially, the cells with one higher row index are underneath Captain Bovidian.

Doctor Beefalo is lost somewhere in this world. Help Captain Bovidian arrive at her cell using the least number of gravity flips as possible. If it is impossible to reach Doctor Beefalo, please output -1.

## 입력

Line 1: Two space-separated integers N and M.

Lines 2..1+N: Line i+1 describes the ith row of Captain Bovidian's world: '.' indicates an empty cell, '#' indicates a blocked cell, 'C' indicates Captain Bovidian's starting position, and 'D' indicates Doctor Beefalo's starting position.

## 출력

Line 1: A single integer indicating the minimum number of times Captain Bovidian must flip gravity to reach Doctor Beefalo, or -1 if it is impossible to reach Doctor Beefalo.

> 라인 1: 보비디안 선장이 닥터 비팔로에게 도달하기 위해 중력을 반전해야 하는 최소 횟수를 나타내는 단일 정수, 또는 닥터 비팔로에게 도달할 수 없는 경우 -1입니다.

## 힌트

### Output Details

The captain starts at position (4, 2). She flips gravity and falls to position (2, 2) and then moves right twice to arrive at (2, 4). She flips gravity again and falls to position (4, 4) and then moves right once to position (4, 5). Finally she flips gravity again to fall to Doctor Beefalo's position at (3, 5).

> 선장은 (4, 2) 위치에서 시작합니다. 중력을 뒤집고 (2, 2) 위치로 떨어진 다음 오른쪽으로 두 번 이동하여 (2, 4)에 도착합니다. 다시 중력을 뒤집고 (4, 4) 위치로 떨어진 다음 오른쪽으로 한 번 이동하여 (4, 5) 위치에 도착합니다. 마지막으로 다시 중력을 뒤집어 (3, 5)에 있는 비팔로 박사의 위치로 떨어집니다.

## 출처

Olympiad > USA Computing Olympiad > 2012-2013 Season > USACO US Open 2013 Contest > Silver 1번

## 알고리즘 분류

- 구현
- 그래프 이론
- 시뮬레이션
- 데이크스트라
- 0-1 너비 우선 탐색
