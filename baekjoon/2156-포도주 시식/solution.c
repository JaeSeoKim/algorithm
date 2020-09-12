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
    int *price;
    int *map;

    scanf("%d", &n);

    map = (int *)malloc(sizeof(int *) * n);
    price = (int *)malloc(sizeof(int *) * n);

    for (int i = 0; i < n; i++)
        scanf("%d", &price[i]);

    map[0] = price[0];
    map[1] = price[0] + price[1];

    for (int i = 2; i < n; i++)
    {
        map[i] = ft_max(map[i - 2] + price[i], map[i - 3] + price[i - 1] + price[i]);
        map[i] = ft_max(map[i], map[i - 1]);
    }

    printf("%d\n", map[n - 1]);
    return (0);
}