//Google Question
////given array = [2 5 1 2 3 5 1 2 4]
// it should return 2
//
//
// given an array [2 1 1 2 3 5 1 2 4]
//  it shud return 1
// 
// given an array = [2 3 4 5]
//  it should return undefined
//
//
function firstRec(arr) {
	if(arr.length === 0 || typeof arr === 'array') {
		return undefined;
	}
	const hashTable = new Array(100);

	for(let i = 0; i < arr.length; i++) {
		if(!hashTable[arr[i]]) {
			hashTable[arr[i]] = true;
		} else 
			return arr[i];
	}
	return undefined;
}

console.log(firstRec([2,5,1,2,3,5,1,2,4]));
console.log(firstRec([2,1,1,2,3,5,1,2,4]));
console.log(firstRec([2,5,5,2,3,5,1,2,4]));
console.log(firstRec([2,3,4,5]));

