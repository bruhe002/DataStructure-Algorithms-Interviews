class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		if (this.top === null) {
			return 'Empty';
		}
		return this.top;
	}

	push(val) {
		const newNode = new Node(val);
		if(!this.top)
		{
			this.top = newNode;
			this.bottom = newNode;
		} else {
			const temp = this.top;
			this.top = newNode;
			this.top.next = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if(!this.top) {
			return null;
		}
		const temp = this.top;
		this.top = this.top.next;
		this.length--;
		return this;
	}
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);


for(let i = 0; i < 4; i++) {
	console.log(myStack.peek());
	myStack.pop();
}
myStack.pop();
