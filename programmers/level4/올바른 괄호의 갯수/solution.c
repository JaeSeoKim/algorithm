#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n)
{
    int *answer;

    answer = (int *)malloc(sizeof(int) * (n + 1));
    answer[0] = 1;
    for (int i = 1; i <= n; i++)
    {
        answer[i] = 0;
        for (int j = 0; j < i; j++)
            answer[i] += answer[i - (j + 1)] * answer[j];
    }

    return answer[n];
}