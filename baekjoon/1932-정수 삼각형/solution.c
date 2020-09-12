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
    int **map;
    int answer = 0;

    scanf("%d", &n);

    map = (int **)malloc(sizeof(int *) * n);
    for (int i = 0; i < n; i++)
    {
        map[i] = (int *)malloc(sizeof(int) * (i + 1));
        for (int j = 0; j <= i; j++)
            scanf("%d", &map[i][j]);
    }

    for (int i = 1; i < n; i++)
    {
        for (int j = 0; j <= i; j++)
        {
            if (j == 0)
                map[i][j] += map[i - 1][j];
            else if (j == i)
                map[i][j] += map[i - 1][j - 1];
            else
                map[i][j] += ft_max(map[i - 1][j], map[i - 1][j - 1]);
        }
    }
    for (int i = 0; i < n; i++)
        answer = ft_max(map[n - 1][i], answer);
    printf("%d\n", answer);
    return (0);
}