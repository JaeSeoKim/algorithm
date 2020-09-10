#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main(void)
{
    int n;
    int *map;
    scanf("%d", &n);

    map = (int *)malloc(sizeof(int) * (n + 1));

    map[1] = 1;
    map[2] = 2;
    for (int i = 3; i <= n; i++)
        map[i] = (map[i - 1] + map[i - 2]) % 15746;

    printf("%d\n", map[n]);
    free(map);
    return (0);
}
