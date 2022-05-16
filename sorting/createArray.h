#include "stdio.h"
#include "stdlib.h"
#include "time.h"


void createArray(int *arr, int size)
{
//	int size = sizeof(arr) / sizeof(arr[0]);

	srand(time(0));
	for(int i = 0; i < size; i++)
	{
		int randNum = (rand() % 20) + 1;
		arr[i] = randNum;
	}
}
