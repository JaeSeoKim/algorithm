#include <stdio.h>
#include <stdlib.h>

int map[9][9];

int check_position(int row, int col, int num)
{
	for (int i = 0; i < 9; i++)
	{
		if (num == map[row][i] || num == map[i][col] || num == map[(row / 3 * 3) + (i / 3)][(col / 3 * 3) + (i % 3)])
			return 0;
	}
	return 1;
}

void dfs(int cnt)
{
	int row = cnt / 9, col = cnt % 9;

	if (cnt == 81)
	{
		for (int i = 0; i < 9; i++)
		{
			for (int j = 0; j < 9; j++)
				printf("%d ", map[i][j]);
			printf("\n");
		}
		exit(0);
	}
	else if (map[row][col] == 0)
	{
		for (int i = 1; i < 10; i++)
		{
			if (check_position(row, col, i))
			{
				map[row][col] = i;
				dfs(cnt + 1);
				map[row][col] = 0;
			}
		}
	}
	else
		dfs(cnt + 1);
}

int main(void)
{
	for (int i = 0; i < 9; i++)
		for (int j = 0; j < 9; j++)
			scanf("%d", &map[i][j]);

	dfs(0);
	return (0);
}
