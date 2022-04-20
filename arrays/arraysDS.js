const strings = ['a', 'b', 'c', 'd'];
//4 items * 4 bytes each = 16 bytes of storage
//

console.log(strings[2]);

//push
strings.push('e');


//pop
strings.pop();
strings.pop();

//unshift
strings.unshift('x');

//splice
strings.splice(2, 1, 'alien');

//C++ Static arrays
// int a[20];
// int b[5]
console.log(strings);

//Implementing an array Class
class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	pop() {
		const lastItem = this.data[this.length-1];
		delete this.data[this.length-1];
		this.length--;
		return lastItem;
	}

	delete(index) {
		const item = this.data[index];
		this.shiftItems(index);
	}

	shiftItems(index) {
		for(let i = index; i < this.length - 1; i++)
		{
			this.data[i] = this.data[i+1];
		}
		delete this.data[this.length-1];
		this.length--;
	}
}

const newArr = new MyArray();
newArr.push('Hi');
newArr.push('you');
newArr.push('!');
//newArr.pop();
//newArr.pop();
newArr.delete(0);
newArr.push('are');
newArr.push('awesome');
newArr.delete(1);
console.log(newArr);

//Create a function that reverses a string
//
function reverse(str) {
	//check input
	if(!str || str.length < 2 || typeof str !== 'string')
		return 'hmmm that is not good'
	let newStr = '';
	let last = str.length-1

	while(last >= 0) {
		newStr = newStr + str[last];
		last--;
	}

	return newStr;
}

let string = "U a little bitch";
console.log(reverse(string));
