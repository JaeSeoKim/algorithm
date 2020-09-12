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
    int *result;

    scanf("%d", &n);

    map = (int *)malloc(sizeof(int) * n);
    result = (int *)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++)
        scanf("%d", &map[i]);

    result[0] = map[0];
    result[1] = map[0] + map[1];
    result[2] = ft_max(map[0] + map[2], map[1] + map[2]);

    for (int i = 3; i < n; i++)
        result[i] = ft_max(result[i - 2] + map[i], result[i - 3] + map[i - 1] + map[i]);

    printf("%d\n", result[n - 1]);
    return (0);
}