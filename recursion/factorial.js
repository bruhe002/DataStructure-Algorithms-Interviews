function factorialRecursive(num) {
	if(num === 0) {
		return 1;
	}
	return num * factorialRecursive(--num);
}

function factorialIterative(num) {
	let temp = 1; 
	while(num !== 0) {
		temp *= num--;
	}

	return temp;
	
}

console.log(factorialRecursive(5));
console.log(factorialIterative(5));
console.log(factorialIterative(0));
console.log(factorialIterative(0));
