#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

bool isPrime(int num)
{
    if (num <= 1)
    {
        return 0;
    }
    for (int i = 2; i <= num / 2; i++)
    {
        if (num % i == 0)
        {
            return false;
        }
    }
    return true;
}

// nums_len은 배열 nums의 길이입니다.
int solution(int nums[], size_t nums_len)
{
    int answer = 0;

    for (int i = 0; i < nums_len; i++)
        for (int j = i + 1; j < nums_len; j++)
            for (int k = j + 1; k < nums_len; k++)
                if (isPrime(nums[i] + nums[j] + nums[k]))
                    answer++;
    return answer;
}