#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

typedef struct _position
{
    int x;
    int y;
    int nx;
    int ny;
} position;

position visited[500];

int top = -1;

void push(int x, int y, int nx, int ny)
{
    position newData;
    newData.x = x;
    newData.y = y;
    newData.nx = nx;
    newData.ny = ny;
    top++;
    visited[top] = newData;
}

int check(int x, int y, int nx, int ny)
{
    for (int i = 0; i <= top; i++)
    {
        position data = visited[i];
        if (data.x == x && data.y == y && data.nx == nx && data.ny == ny)
            return 0;
    }
    return 1;
}

// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
int solution(const char *dirs)
{
    int answer = 0;
    int x = 0;
    int y = 0;

    for (int i = 0; dirs[i]; i++)
    {
        if (dirs[i] == 'U' && y < 5)
        {
            if (check(x, y, x, y + 1))
            {
                push(x, y, x, y + 1);
                push(x, y + 1, x, y);
                answer++;
            }
            y++;
        }
        if (dirs[i] == 'D' && y > -5)
        {
            if (check(x, y, x, y - 1))
            {
                push(x, y, x, y - 1);
                push(x, y - 1, x, y);
                answer++;
            }
            y--;
        }
        if (dirs[i] == 'L' && x > -5)
        {
            if (check(x, y, x - 1, y))
            {
                push(x, y, x - 1, y);
                push(x - 1, y, x, y);
                answer++;
            }
            x--;
        }
        if (dirs[i] == 'R' && x < 5)
        {
            if (check(x, y, x + 1, y))
            {
                push(x, y, x + 1, y);
                push(x + 1, y, x, y);
                answer++;
            }
            x++;
        }
    }
    return answer;
}