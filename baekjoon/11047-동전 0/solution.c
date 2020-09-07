#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main(void)
{
    int n, k;
    int *coinList;
    int cnt = 0;

    scanf("%d %d", &n, &k);

    coinList = (int *)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &coinList[i]);
    }

    for (int i = n - 1; i >= 0; i--)
    {
        if (k == 0)
            break;
        cnt += k / coinList[i];
        k %= coinList[i];
    }
    printf("%d", cnt);
    return (0);
}