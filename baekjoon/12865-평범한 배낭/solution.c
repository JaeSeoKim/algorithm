#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

int ft_max(int a, int b)
{
    return a > b ? a : b;
}

int main(void)
{
    int n;
    int k;
    int **map;
    int **dp;

    scanf("%d %d", &n, &k);

    map = (int **)malloc(sizeof(int *) * n);
    dp = (int **)malloc(sizeof(int *) * n);
    for (int i = 0; i < n; i++)
    {
        map[i] = (int *)malloc(sizeof(int *) * 2);
        dp[i] = (int *)malloc(sizeof(int *) * k);
        scanf("%d %d", &map[i][0], &map[i][1]);
    }

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < k; j++)
        {
            if (i == 0 && map[i][0] <= j + 1)
                dp[i][j] = map[i][1];
            else if (i == 0)
                dp[i][j] = 0;
            else
            {
                dp[i][j] = dp[i - 1][j];
                if (map[i][0] <= j + 1)
                    dp[i][j] = ft_max(dp[i - 1][j], dp[i - 1][j - map[i][0]] + map[i][1]);
            }
        }
    }

    printf("%d\n", dp[n - 1][k - 1]);

    return (0);
}