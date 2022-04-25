function bubbleSort(arr) {
	const size = arr.length;
	for (let i = 0; i < size; i++) {
		for(let j = 0; j < size - 1; j++) {
			if(arr[j] > arr[j + 1]) {
				let temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}			
		}
			
	}
	return arr;
}

let arr = [2,5,4,6,3,1];
console.log(bubbleSort(arr));
