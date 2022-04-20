//Merging sorted arrays

function mergeSortedArrays(arr1, arr2) {
	//Check for any empty arrays
	if (arr1.length === 0)
		return arr2;

	if (arr2.length === 0)
		return arr1;

	//Normal way would yield an n^2 complexity
	//So we don't want to do that
	//lets try making a new array
	//
	let newArr = [];
	// create variables for each array's index
	let len1 = 0;
	let len2 = 0;

	while(len1 < arr1.length && len2 < arr2.length) {
		if(arr1[len1] <= arr2[len2]) {
			newArr.push(arr1[len1]);
			len1++;
		} else { 
			newArr.push(arr2[len2]);
			len2++;
		}
	}

	if(len1 === arr1.length) {
		newArr = newArr.concat(arr2.slice(len2, arr2.length));
	} else {
		newArr = newArr.concat(arr1.slice(len1, arr1.length));
	}

	return newArr;
	
}


console.log(mergeSortedArrays([0,3,4,31], [4,6,30,31]));
