#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct _conference
{
    int start;
    int end;
} typedef conference;

int compare(const void *a, const void *b)
{
    if ((*(conference *)a).end == (*(conference *)b).end)
        return (*(conference *)a).start - (*(conference *)b).start;

    return (*(conference *)a).end - (*(conference *)b).end;
}

int main(void)
{
    int n;
    int cnt = 1;
    conference *conferences;

    scanf("%d", &n);

    if (n == 0)
    {
        printf("0\n");
        return (0);
    }

    conferences = (conference *)malloc(sizeof(conference) * n);

    for (int i = 0; i < n; i++)
        scanf("%d %d", &conferences[i].start, &conferences[i].end);

    qsort(conferences, n, sizeof(conference), compare);

    conference old = conferences[0];
    for (int i = 1; i < n; i++)
    {
        if (old.end <= conferences[i].start)
        {
            old = conferences[i];
            cnt++;
        }
    }

    printf("%d\n", cnt);
    return (0);
}