#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int *arr;
int n;
int m;

void dfs(int index, int cnt);

int main(void)
{
    scanf("%d %d", &n, &m);
    arr = (int *)malloc(sizeof(int) * m);

    dfs(0, 0);
}

void dfs(int index, int cnt)
{
    if (cnt == m)
    {
        for (int i = 0; i < m; i++)
        {
            printf("%d ", arr[i]);
        }
        printf("\n");
        return;
    }
    for (int i = index; i < n; i++)
    {
        arr[cnt] = i + 1;
        dfs(i, cnt + 1);
    }
}
