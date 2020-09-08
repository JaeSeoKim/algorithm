#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int ft_strlen(char *s)
{
    int len = 0;
    while (s[len])
        len++;
    return len;
}

int solution(const char *s)
{
    int answer = 0;
    int len = ft_strlen(s);
    int left;
    int right;

    for (int i = 0; i < len; i++)
    {
        for (int j = len; j > answer; j--)
        {
            left = i;
            right = left + j - 1;

            while (s[left] == s[right] && left < right)
            {
                left++;
                right--;
            }
            if (left >= right && answer < j)
                answer = j;
        }
    }

    return answer;
}