//Create a function that returns true if two arrays have a common element

#include <iostream>
#include <ostream>

using namespace std;

template <class T>
bool commonItems(const T arr1[], const T arr2[]); 

int main()
{
	const char array1[] = { 'a', 'b', 'c', 'x'};

	const char array2[] = { 'x', 'y', 'z'};
	if(commonItems(array1, array2)) {
		cout << "True" << endl;
	} else {
		cout << "False" << endl;
	}
	cout << endl;
	return 0;
}

//BAD WAY O(n^2)
template <class T>
bool commonItems(const T arr1[], const T arr2[]) {
	int sizeB = sizeof(arr2) / sizeof(arr2[0]);
	int sizeA = sizeof(arr1) / sizeof(arr1[0]);
	for(int i = 0; i < sizeA; i++) {
		for(int j = 0; j < sizeB; j++) {
			if(arr1[i] == arr2[j]) { return true; }
		}
	}

	return false;
}

