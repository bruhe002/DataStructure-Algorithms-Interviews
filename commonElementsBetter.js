
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'r'];

function commonItems2(arr1, arr2) {
	//loop through first array and create an object where properties === items in the array
	//
	let map = {};

	for(let i = 0; i < arr1.length; i++) {
		if(!map[arr1[i]]) {
			const item = arr1[i];
			map[item] = true;
		}
	}

	//loop through the second array
	for(let j = 0; j < arr2.length; j++) {
		if(map[array2[j]]) {
			return true;
		}
	}

	return false;
}

console.log(commonItems2(array1, array2))
