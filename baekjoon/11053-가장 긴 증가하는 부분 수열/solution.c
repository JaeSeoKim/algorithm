#include <stdio.h>
#include <stdlib.h>
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
    int answer = 1;

    scanf("%d", &n);
    map = (int *)malloc(sizeof(int) * n);
    dp = (int *)malloc(sizeof(int) * n);

    for (int i = 0; i < n; i++)
        scanf("%d", &map[i]);

    for (int i = 0; i < n; i++)
    {
        dp[i] = 1;
        for (int j = 0; j <= i; j++)
        {
            if (map[i] > map[j])
                dp[i] = ft_max(dp[i], dp[j] + 1);
        }
        answer = ft_max(dp[i], answer);
    }
    printf("%d\n", answer);

    return (0);
}