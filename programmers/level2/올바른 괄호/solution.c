#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
bool solution(const char *s)
{
    char stack[100000];
    int top = -1;

    while (*s)
    {
        if (*s == '(')
        {
            top++;
            stack[top] = *s;
        }
        else
        {
            if (top > -1 && stack[top] == '(')
                top--;
            else
                return false;
        }
        s++;
    }
    if (top == -1)
        return true;
    return false;
}

// int main(void)
// {
//     bool answer = solution("(())()");
//     answer ? printf("true") : printf("false");
// }