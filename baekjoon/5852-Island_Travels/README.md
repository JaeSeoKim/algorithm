# Island Travels

메모리 초과로 인해 다시 시도하기..!

> <https://www.acmicpc.net/problem/5852>

## 문제

Farmer John has taken the cows to a vacation out on the ocean! The cows are living on N (1 <= N <= 15) islands, which are located on an R x C grid (1 <= R, C <= 50). An island is a maximal connected group of squares on the grid that are marked as 'X', where two 'X's are connected if they share a side. (Thus, two 'X's sharing a corner are not necessarily connected.)

> 농사 존이 소들을 데리고 바다로 휴가를 떠났어요! 소들은 R x C 격자(1 <= R, C <= 50)에 위치한 N(1 <= N <= 15)개의 섬에 살고 있어요. 섬은 그리드에서 'X'로 표시된 사각형의 최대 연결 그룹으로, 두 개의 'X'가 한 면을 공유하면 연결됩니다. (따라서 한 모서리를 공유하는 두 개의 'X'가 반드시 연결될 필요는 없습니다.)

Bessie, however, is arriving late, so she is coming in with FJ by helicopter. Thus, she can first land on any of the islands she chooses. She wants to visit all the cows at least once, so she will travel between islands until she has visited all N of the islands at least once.

> 하지만 베시는 늦게 도착하기 때문에 헬리콥터를 타고 FJ와 함께 들어옵니다. 따라서 베시는 먼저 자신이 선택한 섬에 착륙할 수 있습니다. 베시는 모든 소를 한 번 이상 방문하고 싶기 때문에 N개의 섬을 모두 한 번 이상 방문할 때까지 섬과 섬 사이를 이동할 것입니다.

FJ's helicopter doesn't have much fuel left, so he doesn't want to use it until the cows decide to go home. Fortunately, some of the squares in the grid are shallow water, which is denoted by 'S'. Bessie can swim through these squares in the four cardinal directions (north, east, south, west) in order to travel between the islands. She can also travel (in the four cardinal directions) between an island and shallow water, and vice versa.

> FJ의 헬리콥터에는 연료가 얼마 남지 않았기 때문에 소들이 집으로 돌아갈 때까지 헬리콥터를 사용하고 싶지 않아요. 다행히도 그리드의 일부 사각형은 'S'로 표시된 얕은 물입니다. 베시는 섬 사이를 이동하기 위해 네 개의 기본 방향(북쪽, 동쪽, 남쪽, 서쪽)으로 이 사각형을 헤엄쳐서 이동할 수 있습니다. 또한 섬과 얕은 물 사이를 네 가지 기본 방향으로 이동할 수 있으며, 그 반대의 경우도 마찬가지입니다.

Find the minimum distance Bessie will have to swim in order to visit all of the islands. (The distance Bessie will have to swim is the number of distinct times she is on a square marked 'S'.) After looking at a map of the area, Bessie knows this will be possible.

> 베시가 모든 섬을 방문하기 위해 헤엄쳐야 하는 최소 거리를 구합니다. (베시가 헤엄쳐야 하는 거리는 베시가 'S'로 표시된 사각형 위에 있는 횟수입니다.) 베시는 이 지역의 지도를 보고 이것이 가능하다는 것을 알았습니다.

## 입력

Line 1: Two space-separated integers: R and C.

> 줄 1: 공백으로 구분된 두 개의 정수: R과 C.

Lines 2..R+1: Line i+1 contains C characters giving row i of the grid. Deep water squares are marked as '.', island squares are marked as 'X', and shallow water squares are marked as 'S'.

> 줄 2: R+1: i+1 줄에는 격자의 행을 나타내는 C 문자가 포함됩니다. 깊은 물 사각형은 '.', 섬 사각형은 'X', 얕은 물 사각형은 'S'로 표시됩니다.

## 출력

Line 1: A single integer representing the minimum distance Bessie has to swim to visit all islands.

> 줄 1: 베시가 모든 섬을 방문하기 위해 헤엄쳐야 하는 최소 거리를 나타내는 단일 정수입니다.

## 힌트

Input Details

There are three islands with shallow water paths connecting some of them.

> 입력 세부 정보
>
> 세 개의 섬이 있고 그 중 일부를 연결하는 얕은 물길이 있습니다.

Output Details

Bessie can travel from the island in the top left to the one in the middle, swimming 1 unit, and then travel from the middle island to the one in the bottom right, swimming 2 units, for a total of 3 units.

> 출력 세부 정보
>
> 베시는 왼쪽 위 섬에서 가운데 섬으로 이동하여 유닛 1개를 수영하고, 가운데 섬에서 오른쪽 아래 섬으로 이동하여 유닛 2개를 수영하여 총 3개의 유닛을 이동할 수 있습니다.

## 출처

Olympiad > USA Computing Olympiad > 2012-2013 Season > USACO January 2013 Contest > Gold 2번

## 알고리즘 분류

- 다이나믹 프로그래밍
- 그래프 이론
- 그래프 탐색
- 너비 우선 탐색
- 비트마스킹
- 데이크스트라
- 최단 경로
- 비트필드를 이용한 다이나믹 프로그래밍
- 외판원 순회 문제
- 0-1 너비 우선 탐색
