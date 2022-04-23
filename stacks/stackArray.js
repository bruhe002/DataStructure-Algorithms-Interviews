class Stack {
	constructor() {
		this.list = [];
	}
	peek() {
		return this.list[this.list.length - 1];
	}

	push(val) {
		this.list.push(val);
		return this;
	}

	pop() {
		this.list.pop();
		return this;
	}

}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.peek());
