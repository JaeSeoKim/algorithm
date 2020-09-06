#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int gcd(int w, int h);

long long solution(int w, int h)
{
    long long answer = 1;
    answer = (long long)w * (long long)h - (w + h - (long long)gcd(w, h));
    return answer;
}

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