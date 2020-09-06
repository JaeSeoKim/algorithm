#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int ft_strlen(char* str)
{
    int len = 0;

    while (str[len])
    {
        len++;
    }
    return len;
}

int ft_strcmp(char *s1, char *s2)
{
    while (*s1 || *s2)
    {
        if (*s1 != *s2)
        {
            return *s1 > *s2;
        }
        s1++;
        s2++;
    }
    return *s1 > *s2;
}

int static compare(const void *first, const void *second)
{
    char a[12] = {
        0,
    };
    char b[12] = {
        0,
    };
    sprintf(a, "%d%d", *(int *)first, *(int *)second);
    sprintf(b, "%d%d", *(int *)second, *(int *)first);
    return ft_strcmp(b, a);
}

void ft_strcat(char *str, int num)
{
    char buf[12] = {
        0,
    };
    sprintf(buf, "%d", num);
    while (*str)
        str++;
    for (int i = 0; buf[i]; i++)
    {
        *str++ = buf[i];
    }
}

// numbers_len은 배열 numbers의 길이입니다.
char *solution(int numbers[], size_t numbers_len)
{
    int answerSize = 0;
    for (int i = 0; i < numbers_len; i++)
    {
        char buf[12];
        sprintf(buf, "%d", numbers[i]);
        answerSize += ft_strlen(buf);
    }
    // return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
    char *answer = (char *)malloc(sizeof(char) * (answerSize + 1));
    for (int i = 0; i <= answerSize; i++)
    {
        answer[i] = '\0';
    }
    qsort(numbers, numbers_len, sizeof(int), compare);
    if(numbers[0] == 0)
        return "0";
    for (int i = 0; i < numbers_len; i++)
    {
        ft_strcat(answer, numbers[i]);
    }
    return answer;
}

// int main(void)
// {
//     // int numbers[5] = {0, 0, 0, 0, 0};
//     int numbers[2] = {5, 546};
//     printf("%s\n", solution(numbers, 2));
// }