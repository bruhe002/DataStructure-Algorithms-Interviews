#include "createArray.h"
#include "printArray.h"

#define ARR_SIZE 20
int main() 
{
	//Create array
	int arr[ARR_SIZE];

	createArray(arr, ARR_SIZE);

	for(int i = 0; i < ARR_SIZE - 1; i++)
	{
		for(int j = i + 1; j > 0 && arr[j] > arr[j - 1]; j--)
		{
			//Ascending Order
			//Swap elements
			int temp = arr[j];
			arr[j] = arr[j-1];
			arr[j-1] = temp;
		}
	}

	printArray(arr, ARR_SIZE);
}
	

