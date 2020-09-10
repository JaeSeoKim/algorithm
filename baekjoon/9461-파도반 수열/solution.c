#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main(void)
{
    int n;
    int *arr;
    long long P[101] = {
        0,
        1,
        1,
        1,
    };
    scanf("%d", &n);

    arr = (int *)malloc(sizeof(int) * n);

    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    for (int i = 4; i <= 100; i++)
        P[i] = P[i - 2] + P[i - 3];

    for (int i = 0; i < n; i++)
        printf("%lld\n", P[arr[i]]);
    return (0);
}
