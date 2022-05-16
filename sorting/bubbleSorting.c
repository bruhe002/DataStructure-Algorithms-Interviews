#include "stdio.h"
#include "stdlib.h"
#include "createArray.h"
#include "printArray.h"
#define ARR_SIZE 20
int main()
{
	int arr[ARR_SIZE];

	//Array needs to be filled
	createArray(arr, ARR_SIZE);
	// Ascending Order
	//int size = sizeof(arr) / sizeof(arr[0]);

	for(int i = 0; i < ARR_SIZE - 1; i++) 
	{
		for(int j = 0; j < ARR_SIZE - i - 1; j++)
		{
			if(arr[j] < arr[j + 1]) 
			{
				int temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
				
		}
	}

	printArray(arr, ARR_SIZE);
}
