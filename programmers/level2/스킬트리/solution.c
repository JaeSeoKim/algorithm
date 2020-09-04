#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

char stack[10000];
int stack_index = -1;

void push(char skil)
{
	stack_index++;
	stack[stack_index] = skil;
}

char top()
{
	return stack[stack_index];
}

void reset()
{
	stack_index = -1;
}

bool checkSkillTree(const char *skill, char learnSkill)
{
	int i = 0;
	while (skill[i])
	{
		if (learnSkill == skill[i])
		{
			if (i == 0)
				push(learnSkill);
			else if (top() == skill[i - 1])
				push(learnSkill);
			else
				return false;
		}
		i++;
	}
	return true;
}

// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
// skill_trees_len은 배열 skill_trees의 길이입니다.
int solution(const char *skill, const char *skill_trees[], size_t skill_trees_len)
{
	int answer = 0;

	for (int i = 0; i < skill_trees_len; i++)
	{
		int j = 0;
		bool flag = true;
		reset();
		while (skill_trees[i][j])
		{
			if (!checkSkillTree(skill, skill_trees[i][j]))
				flag = false;
			j++;
		}
		if (flag)
			answer++;
	}
	return answer;
}
