#include <stdlib.h>
#include <stdio.h>
#include <math.h>

void hanoi(int n, int from, int by, int to);

int main(void)
{
	int n;

	scanf("%d", &n);

	// 횟수 출력 (2^n - 1)
	printf("%d\n", (int)pow(2, n) - 1);

	hanoi(n, 1, 2, 3);
}

void hanoi(int n, int from, int by, int to)
{
	if (n == 1)
		printf("%d %d\n", from, to);
	else
	{
		hanoi(n - 1, from, to, by);
		printf("%d %d\n", from, to);
		hanoi(n - 1, by, from, to);
	}
}
