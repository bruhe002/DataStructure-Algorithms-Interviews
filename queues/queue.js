class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	isEmpty() {
		return (this.length === 0);
	}

	peek() {
		if(this.isEmpty()) {
			return null;
		}
		
		return this.first;
	}

	enqueue(val) {
		const newNode = new Node(val);
		if(this.isEmpty()) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
		return this;


	}

	dequeue() {
		if(this.isEmpty()) {
			return this;
		}

		if(this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.length--;	
		return this;

		
	
	}
}

const myQ = new Queue; 


