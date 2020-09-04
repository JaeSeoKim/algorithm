#include <stdlib.h>
#include <stdio.h>

void writeArr(int n, int i, int j, char ***arr);
void writeArrEmpty(int n, int i, int j, char ***arr);

int main(void)
{
	int n;
	char **arr;

	scanf("%d", &n);

	// 배열 할당
	arr = (char **)malloc(sizeof(char *) * n);
	for (int i = 0; i < n; i++)
	{
		arr[i] = (char *)malloc(sizeof(char) * n);
	}
	writeArr(n, 0, 0, &arr);
	for (int i = 0; i < n; i++)
	{
		for (int j = 0; j < n; j++)
		{
			printf("%c", arr[i][j]);
		}
		printf("\n");
	}
}

void writeArr(int n, int i, int j, char ***arr)
{
	if (n >= 3)
	{
		writeArr(n / 3, i, j, arr);
		writeArr(n / 3, i, j + (n / 3), arr);
		writeArr(n / 3, i, j + (n / 3) * 2, arr);
		writeArr(n / 3, i + (n / 3), j, arr);
		writeArrEmpty(n / 3, i + (n / 3), j + (n / 3), arr);
		writeArr(n / 3, i + (n / 3), j + (n / 3) * 2, arr);
		writeArr(n / 3, i + (n / 3) * 2, j, arr);
		writeArr(n / 3, i + (n / 3) * 2, j + (n / 3), arr);
		writeArr(n / 3, i + (n / 3) * 2, j + (n / 3) * 2, arr);
	}
	else
	{
		(*arr)[i][j] = '*';
	}
}

void writeArrEmpty(int n, int i, int j, char ***arr)
{
	for (int x = i; x < i + n; x++)
	{
		for (int y = j; y < j + n; y++)
		{
			(*arr)[x][y] = ' ';
		}
	}
}
