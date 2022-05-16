#include "createArray.h"
#include "printArray.h"

#define ARR_SIZE 20
int main() 
{
	int arr[ARR_SIZE];
	createArray(arr, ARR_SIZE);

	for(int i = 0; i < ARR_SIZE; i++)
	{
		int highestIdx = i;

		//Ascending Order
		for(int j = i + 1; j < ARR_SIZE; j++)
		{
			if(arr[highestIdx] < arr[j])
			{
				highestIdx = j;
			}
		}
		
		//SWAP the values
		int temp = arr[highestIdx];
		arr[highestIdx] = arr[i];
		arr[i] = temp;
	}

	printArray(arr, ARR_SIZE);
}
