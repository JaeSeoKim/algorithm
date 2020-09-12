#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int ft_min(int a, int b)
{
    return a < b ? a : b;
}

int main(void)
{
    int n;
    int **price;
    int **map;
    int answer = __INT_MAX__;

    scanf("%d", &n);

    price = (int **)malloc(sizeof(int *) * n);
    map = (int **)malloc(sizeof(int *) * n);
    for (int i = 0; i < n; i++)
    {
        price[i] = (int *)malloc(sizeof(int) * 3);
        map[i] = (int *)malloc(sizeof(int) * 3);
    }

    for (int i = 0; i < n; i++)
        for (int j = 0; j < 3; j++)
            scanf("%d", &price[i][j]);

    map[0][0] = price[0][0];
    map[0][1] = price[0][1];
    map[0][2] = price[0][2];

    for (int i = 1; i < n; i++)
    {
        map[i][0] = ft_min(map[i - 1][1], map[i - 1][2]) + price[i][0];
        map[i][1] = ft_min(map[i - 1][0], map[i - 1][2]) + price[i][1];
        map[i][2] = ft_min(map[i - 1][0], map[i - 1][1]) + price[i][2];
    }
    printf("%d\n", ft_min(map[n - 1][0], ft_min(map[n - 1][1], map[n - 1][2])));
    return (0);
}