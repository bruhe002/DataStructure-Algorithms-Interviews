#include "stdio.h"
#include "stdlib.h"

void printArray(const int *arr, int size)
{
	//int size = sizeof(arr) / sizeof(arr[0]);

	for(int i = 0; i < size; i++)
	{
		printf("%d ", arr[i]);
	}

	printf("\n");
}
	
