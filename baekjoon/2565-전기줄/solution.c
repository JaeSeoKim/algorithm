#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int compare(const void *a, const void *b)
{
    return (*(int **)a)[0] - (*(int **)b)[0];
}

int ft_max(int a, int b)
{
    return a > b ? a : b;
}

int main(void)
{
    int n;
    int **map;
    int *dp;
    int answer = 1;

    scanf("%d", &n);
    map = (int **)malloc(sizeof(int *) * n);
    dp = (int *)malloc(sizeof(int) * n);

    for (int i = 0; i < n; i++)
    {
        map[i] = (int *)malloc(sizeof(int) * 2);
        scanf("%d %d", &map[i][0], &map[i][1]);
    }

    qsort(map, n, sizeof(int **), compare);

    for (int i = 0; i < n; i++)
    {
        dp[i] = 1;
        for (int j = 0; j < i; j++)
        {
            if (dp[j] + 1 > dp[i] && map[i][1] > map[j][1])
                dp[i] = dp[j] + 1;
        }
        answer = ft_max(dp[i], answer);
    }
    printf("%d\n", n - answer);

    return (0);
}