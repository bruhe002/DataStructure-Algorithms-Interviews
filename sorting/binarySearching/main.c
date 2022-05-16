#include "checkForCopy.h"
#include "insertionSort.h"
#include "binSearch.h"
#include "printArray.h"

#include "time.h"
#include "stdio.h"
#include "stdlib.h"

#define ARR_SIZE 50
int main() 
{
	//Create the Array
	srand(time(0));
	int arr[ARR_SIZE];

	int numOfElements = 0;
	for(int i = 0; i < ARR_SIZE; i++)
	{
		int randNum = (rand() % 100) + 1;
		if(!(checkForCopy(arr, numOfElements, randNum)))
		{
			arr[i] = randNum;
			numOfElements++;
		}
	}

	//Sort the array
	insertionSort(arr, ARR_SIZE);

	//Print array
	printArray(arr, ARR_SIZE);

	//Ask for number
	int num;
	printf("Search for a number\n");
	scanf("%d\n", num);

	//Print the index
	printf("%d\n", binarySearch(arr, 0, ARR_SIZE - 1, num);
}
