#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int *arr;
int n;
int m;

void dfs(int cnt);

int main(void)
{
    scanf("%d %d", &n, &m);
    arr = (int *)malloc(sizeof(int) * m);
    dfs(0);
}

void dfs(int cnt)
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
    for (int i = 0; i < n; i++)
    {
        arr[cnt] = i + 1;
        dfs(cnt + 1);
    }
}
