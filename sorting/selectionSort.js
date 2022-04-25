function selectionSort(arr) {
	const size = arr.length;
	for(let i = 0; i < size; i++) {
	let lowIdx = i;
		for(let j = i + 1; j < size; j++) {
			if(arr[j] < arr[lowIdx]) {
				lowIdx = j;
			}
		}
		let temp = arr[i];
		arr[i] = arr[lowIdx];
		arr[lowIdx] = temp;
	}
	return arr;
}

let arr = [ 88, 43, 2, 3, 68, 63, 1, 20];

console.log(selectionSort(arr));
