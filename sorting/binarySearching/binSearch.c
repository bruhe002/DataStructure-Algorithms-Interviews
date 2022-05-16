

int binarySearch(const int arr[], int start, int end, int element)
{
	if(start > end)
	{
		return -1;
	}

	int mid = (end + start) / 2;
	if(arr[mid] == element) { return mid; }
	if(arr[mid] > element) { return binarySearch(arr, mid + 1, end, element); }
	if(arr[mid < element) { return binarySearch(arr, start, mid - 1, element); }
}
