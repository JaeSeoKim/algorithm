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
    int *map;

    scanf("%d", &n);

    map = (int *)malloc(sizeof(int) * n);

    map[0] = 0;
    for (int i = 1; i < n; i++)
    {
        map[i] = __INT_MAX__;
        if ((i + 1) % 2 == 0)
            map[i] = ft_min(map[i], map[(i + 1) / 2 - 1] + 1);
        if ((i + 1) % 3 == 0)
            map[i] = ft_min(map[i], map[(i + 1) / 3 - 1] + 1);
        map[i] = ft_min(map[i], map[i - 1] + 1);
        printf("%d: %d\n", i + 1, map[i]);
    }
    printf("%d\n", map[n - 1]);
    return (0);
}