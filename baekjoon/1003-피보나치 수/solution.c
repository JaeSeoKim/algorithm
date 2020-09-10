#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main(void)
{
    int n;
    int *arr;
    int map[41] = {
        0,
        1,
        0,
    };

    scanf("%d", &n);

    arr = (int *)malloc(sizeof(int) * n);

    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    for (int i = 2; i <= 40; i++)
        map[i] = map[i - 1] + map[i - 2];

    for (int i = 0; i < n; i++)
    {
        if (arr[i] == 0)
            printf("1 0\n");
        else if (arr[i] == 1)
            printf("0 1\n");
        else
            printf("%d %d\n", map[arr[i] - 1], map[arr[i]]);
    }

    return (0);
}