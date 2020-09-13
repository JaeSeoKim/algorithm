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
    int *dpl;
    int *dph;
    int answer = 1;

    scanf("%d", &n);
    map = (int *)malloc(sizeof(int) * n);
    dpl = (int *)malloc(sizeof(int) * n);
    dph = (int *)malloc(sizeof(int) * n);

    for (int i = 0; i < n; i++)
        scanf("%d", &map[i]);

    for (int i = 0; i < n; i++)
    {
        dph[i] = 1;
        dpl[n - i - 1] = 1;
        for (int j = 0; j <= i; j++)
        {
            if (map[i] > map[j])
                dph[i] = ft_max(dph[i], dph[j] + 1);
            if (map[n - i - 1] > map[n - j - 1])
                dpl[n - i - 1] = ft_max(dpl[n - i - 1], dpl[n - j - 1] + 1);
        }
    }

    for (int i = 0; i < n; i++)
        answer = ft_max(answer, dph[i] + dpl[i] - 1);

    printf("%d\n", answer);

    return (0);
}