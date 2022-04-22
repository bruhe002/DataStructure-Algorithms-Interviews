class dll {
	constructor(val) {
		this.head = {
			value: val,
			next: null,
			prev: null
		}

		this.tail = this.head;

		this.length = 1;
	}

	append(val) {
		const newNode = {
			value: val,
			next: null,
			prev: null
		};
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(val) {
		const newNode = {
			value: val,
			next: null,
			prev: null
		};
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		this.length++;
		return this;
		
	}

	traverseToIndex(idx) {
		let current = this.head;
		for(let i = 0; i < idx; i++) {
			current = current.next;
		}
		return current;
	}

	insert(index, val) {
		if(index >= this.length) {
			return this.append(val);
		}
		const newNode = {
			value: val,
			next: null,
			prev: null
		};
		const leader = this.traverseToIndex(index - 1);
		const follower = leader.next;
		leader.next = newNode;
		newNode.prev = leader;
		newNode.next = follower;
		follower.prev = newNode;
		this.length++;
		return this;

	}

	remove(idx) {
		if(idx >= this.length) {
			let temp = this.tail;
			this.tail = this.tail.prev;
			temp.prev = null;
			this.tail.next = null;
		} else if(idx === 0) {
			let temp = this.head;
			this.head = this.head.next;
			this.head.prev = null;
			temp.next = null;
		} else {
			const leader = this.traverseToIndex(idx - 1);
			const follower = leader.next;
			leader.next = follower.next;
			follower.next.prev = follower.prev;
			follower.next = null;
			follower.prev = null;
		}

		this.length--;
		return this;
	}
}

const myDoubleLL = new dll(10);
myDoubleLL.append(5);
myDoubleLL.append(16);
myDoubleLL.prepend(1);
myDoubleLL.prepend(4);
myDoubleLL.insert(3, 12);
myDoubleLL.insert(5,14);
//console.log(myDoubleLL);
let current = myDoubleLL.head;
while (current !== null) {
	console.log(current.value);
	current = current.next;
}
current = myDoubleLL.tail;
while(current !== null) {
	console.log(current.value);
	current = current.prev;
}

myDoubleLL.remove(0);
myDoubleLL.remove(20);
myDoubleLL.remove(5);
current = myDoubleLL.head;
while (current !== null) {
	console.log(current.value);
	current = current.next;
}
current = myDoubleLL.tail;
while(current !== null) {
	console.log(current.value);
	current = current.prev;
}

