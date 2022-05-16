#include "insertionSort.h"


void insertionSort(int arr[], int size) 
{
	for(int i = 0; i < size; i ++)
	{
		for(int j + 1; j > 0 && arr[j] < arr[j - 1]; j--)
		{
			int temp = arr[j];
			arr[j] = arr[j-1];
			arr[j - 1] = temp;
		}
	}
}
