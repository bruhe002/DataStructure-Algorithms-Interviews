function insertionSort(arr) {
	const size = arr.length
	for(let i = 1; i < size; i++) {
		if(arr[i-1] > arr[i]) {
			for(let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
				let temp = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = temp;
			}
		}
	}

	return arr;
}

const arr = [12, 4, 2,6,15,10,5,9,8];

console.log(insertionSort(arr));
