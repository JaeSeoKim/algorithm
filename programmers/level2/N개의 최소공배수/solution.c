#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int gcd(int w, int h)
{
    int tmp;

    if (w < h)
    {
        tmp = w;
        w = h;
        h = tmp;
    }
    while (h != 0)
    {
        tmp = w % h;
        w = h;
        h = tmp;
    }
    return w;
}

int lcm(int a, int b){
    return a * b / gcd(a,b);
}

// arr_len은 배열 arr의 길이입니다.
int solution(int arr[], size_t arr_len)
{
    int answer = arr[0];

    for (int i = 1; i < arr_len; i++)
    {
        answer = lcm(answer, arr[i]);
    }
    return answer;
}