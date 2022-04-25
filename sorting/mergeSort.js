const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4,0];

function mergeSort(arr) {
	if(arr.length === 1) {
		return arr;
	}
	const length = arr.length;
	const middle = Math.floor(length / 2); // rounds down from a .5
	const left = arr.slice(0, middle); // Slice(): two parameters are bounded, goes up to second param
	const right = arr.slice(middle); // Slice(): one paramterter is start... goes to the end

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const result = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while((leftIndex < left.length) && (rightIndex < right.length)) {
		if(left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}

	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


console.log(mergeSort(numbers));
