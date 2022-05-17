

int binarySearch(const int arr[], int start, int end, int element)
{
	if(start > end)
	{
		return -1;
	}

	int mid = (end + start) / 2;
	if(arr[mid] == element) { return mid; }
	if(arr[mid] < element) { return binarySearch(arr, mid + 1, end, element); }
	if(arr[mid] > element) { return binarySearch(arr, start, mid - 1, element); }
}

int binarySearchNonRecursion(const int arr[], int start, int end, int element)
{
	while(end >= start)
	{
		int mid = (end + start) / 2;

		if(arr[mid] == element) { return mid; }
		if(element > arr[mid]) {
			start = mid + 1;
		}
		if(element < arr[mid])
		{
			end = mid - 1;
		}
	}

	return -1;
}
