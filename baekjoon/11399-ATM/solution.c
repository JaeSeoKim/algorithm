#include <stdbool.h>
#include <stdlib.h>
#include <stdio.h>

int compare(const void *a, const void *b)
{
    return *(int *)a - *(int *)b;
}

int main(void)
{
    int n;
    int *pList;
    int total = 0;
    int old = 0;

    scanf("%d", &n);
    pList = (int *)malloc(sizeof(int) * n);

    for (int i = 0; i < n; i++)
        scanf("%d", &pList[i]);

    qsort(pList, n, sizeof(int), compare);

    for (int i = 0; i < n; i++)
    {
        old += pList[i];
        total += old;
    }

    printf("%d", total);
    return (0);
}