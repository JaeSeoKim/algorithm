#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MOD 1000000000

int main(void)
{
    int n;
    long long **map;
    long long answer = 0;

    scanf("%d", &n);

    map = (long long **)malloc(sizeof(long long *) * n);
    for (int i = 0; i < n; i++)
        map[i] = (long long *)malloc(sizeof(long long) * 10);
    for (int i = 0; i < 9; i++)
        map[0][i] = 1;
    map[0][9] = 0;

    for (int i = 1; i < n; i++)
    {
        for (int j = 0; j < 10; j++)
        {
            if (j == 0)
                map[i][j] = map[i - 1][j + 1] % MOD;
            else if (j == 9)
                map[i][j] = map[i - 1][j - 1] % MOD;
            else
                map[i][j] = (map[i - 1][j + 1] + map[i - 1][j - 1]) % MOD;
        }
    }

    for (int i = 0; i < 10; i++)
        answer = (answer + map[n - 1][i]) % MOD;

    printf("%lld\n", answer);
    return (0);
}