#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int *arr;
int *visited;
int n;
int m;

void dfs(int cnt);

int main(void)
{
	scanf("%d %d", &n, &m);
	arr = (int *)malloc(sizeof(int) * m);
	visited = (int *)malloc(sizeof(int) * n);
	for (int i = 0; i < n; i++)
		visited[i] = false;
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
		if (visited[i] == false)
		{
			visited[i] = true;
			arr[cnt] = i + 1;
			dfs(cnt + 1);
			visited[i] = false;
		}
	}
}
