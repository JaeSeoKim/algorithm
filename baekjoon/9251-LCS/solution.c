#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

int ft_max(int a, int b)
{
    return a > b ? a : b;
}

int main(void)
{
    char stringA[1001];
    char stringB[1001];
    int dp[1001][1001];
    int len[2];

    scanf("%s %s", stringA, stringB);

    len[0] = strlen(stringA);
    len[1] = strlen(stringB);

    for (int i = 0; i < len[0]; i++)
        for (int j = 0; j < len[1]; j++)
            dp[i][j] = 0;

    for (int i = 1; i <= len[0]; i++)
    {
        for (int j = 1; j <= len[1]; j++)
        {
            if (stringA[i - 1] == stringB[j - 1])
                dp[i][j] = dp[i - 1][j - 1] + 1;
            else
                dp[i][j] = ft_max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    printf("%d\n", dp[len[0]][len[1]]);
    return (0);
}