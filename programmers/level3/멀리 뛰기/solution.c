#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

long long solution(int n)
{
    if (n <= 3)
        return (n);
    long long *map;
    map = (long long *)malloc(sizeof(long long) * n);

    map[0] = 1;
    map[1] = 2;
    for (int i = 2; i < n; i++)
        map[i] = (map[i - 1] + map[i - 2]) % 1234567;
    return map[n - 1];
}