#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main(void)
{
    char buf[51] = {
        0,
    };
    int sum = 0;
    int result = 0;
    int i = 0;
    int flag = 0;
    char sign;

    scanf("%s", buf);

    while (buf[i])
    {
        int j = 0;
        if (buf[i] >= '0' && buf[i] <= '9')
        {
            sum += atoi(&buf[i]);
            while (buf[i] >= '0' && buf[i] <= '9')
                i++;
        }
        sign = buf[i++];
        if (sign == '-')
        {
            if (!flag)
            {
                result = sum;
                sum = 0;
                flag = 1;
            }
            else
            {
                result -= sum;
                sum = 0;
            }
        }
    }
    if (!flag)
        result += sum;
    else
    {
        result -= sum;
    }

    printf("%d\n", result);
    return (0);
}