#include <iostream>
#include <vector>
#include <stdlib.h>
#include <time.h>

//Generate a random array of 10 integers, randomized from 0 to 100, and use 
//selection sort to sort them in Ascending Order

int main() {
	srand(time(0));
	std::vector<int> arr;
	for(int i = 0; i < 10; i++) {
		int num = rand() % 101;
		arr.push_back(num);
	}

	int size = arr.size();
	for(int i = 0; i < size; i++) {
		int highIdx = i;
		for(int j = i + 1; j < size; j++) {
			if(arr[highIdx] < arr[j]) {
				highIdx = j;
			}
		}
		int temp = arr[i];
		arr[i] = arr[highIdx];
		arr[highIdx] = temp;
	}

	for(int i = 0; i < size; i++) {
		std::cout << arr[i] << ", ";
	}

	std::cout << std::endl;
}
