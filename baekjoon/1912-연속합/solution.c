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
    int *map;
    int *dp;
    int answer;

    scanf("%d", &n);

    map = (int *)malloc(sizeof(int) * n);
    dp = (int *)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++)
        scanf("%d", &map[i]);

    dp[0] = map[0];
    answer = map[0];
    for (int i = 1; i < n; i++)
    {
        dp[i] = ft_max(dp[i - 1] + map[i], map[i]);
        answer = ft_max(dp[i], answer);
    }

    printf("%d\n", answer);

    return (0);
}