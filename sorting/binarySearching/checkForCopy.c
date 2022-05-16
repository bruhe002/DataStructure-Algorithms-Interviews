#include "checkForCopy.h"

int checkForCopy(int arr[], int numOfElements, int element)
{
	for(int i = 0; i < numOfElements; i++)
	{
		if(arr[i] == element)
			return 1;
	}

	return 0;
}
