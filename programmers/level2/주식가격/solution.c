#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// prices_len은 배열 prices의 길이입니다.
int *solution(int prices[], size_t prices_len)
{
	// return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
	int *answer = (int *)malloc(sizeof(int) * prices_len);

	for (int i = 0; i < prices_len; i++)
	{
		int j = i + 1;
		while (j < prices_len - 1 && prices[i] <= prices[j])
		{
			j++;
		}
		if (j == prices_len)
			answer[i] = 0;
		else
			answer[i] = j - i;
	}
	return answer;
}

// int main(void)
// {
// 	int prices[5] = {1, 2, 3, 2, 3};
// 	int *result = solution(prices, 5);
// 	printf("%d %d %d %d %d\n", result[0], result[1], result[2], result[3], result[4]);
// }
