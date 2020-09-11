#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int check_position(int *map, int x)
{
    for (int i = 0; i < x; i++)
    {
        if (map[i] == map[x])
            return 0;
        if (map[i] > map[x] && x - i == map[i] - map[x])
            return 0;
        else if (x - i == map[x] - map[i])
            return 0;
    }
    return 1;
}

void dfs(int n, int *map, int x, int *answer)
{
    if (x == n)
        (*answer)++;
    else
    {
        for (int i = 0; i < n; i++)
        {
            map[x] = i;
            if (check_position(map, x))
                dfs(n, map, x + 1, answer);
        }
    }
}

int solution(int n)
{
    int answer = 0;
    int *map;

    map = (int *)malloc(sizeof(int) * n);

    dfs(n, map, 0, &answer);
    return answer;
}