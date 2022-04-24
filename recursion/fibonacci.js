function fibonacciRecursive(n) {
	if(n === 0) {
		return 0;
	}

	if(n === 1) {
		return 1;
	}

	return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciIter(n) {
	let temp1 = 0;
	if(n === 0) {
		return temp1;
	}
	let temp2 = 1;
	for(let i = 0; i < n-1; i++) {
		let save = temp2;
		temp2 = temp2 + temp1;
		temp1 = save;
	}
	return temp2;
}

console.log(fibonacciRecursive(8));
console.log(fibonacciIter(8));
console.log(fibonacciRecursive(0));
console.log(fibonacciIter(0));
console.log(fibonacciRecursive(5));
console.log(fibonacciIter(5));
