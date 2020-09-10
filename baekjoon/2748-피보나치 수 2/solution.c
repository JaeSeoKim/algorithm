#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main(void)
{
    int n;
    long long *arr;

    scanf("%d", &n);
    arr = (long long *)malloc(sizeof(long long) * (n + 1));
    arr[0] = 0;
    arr[1] = 1;

    for (int i = 2; i <= n; i++)
        arr[i] = (arr[i - 1] + arr[i - 2]);

    printf("%lld\n", arr[n]);

    return (0);
}