class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}


class LinkedList {
	constructor(val) {
		this.head = {
			value: val,
			next: null
		}
		this.tail = this.head;
		this.length = 1;
	}
	
	//Add to end of the list
	append(val) {
		this.tail.next = { //Set the tail.next to a new object
			value: val,
			next: null
		}
		this.tail = this.tail.next; // set tail to new object
		this.length++;
	}

	//Add to the front of the list
	prepend(val) {
		const newNode = new Node(val);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
	}

	printList() {
		const array = [];
		let current = this.head;
		while(current !== null) {
			array.push(current.value);
			current = current.next;
		}
		console.log(array);
	}
	//Insert method
	insert(idx, val) {
		if(idx === 0) {
			this.prepend(val);
		} else if(idx === this.length - 1) {
			this.append(val);
		} else if(idx >= this.length) {
			console.log("Not a valid index");
		} else {

			let current = this.head;
			for(let i = 0; i < idx-1; i++) {
				current = current.next
			}
			const newNode = new Node(val);
			newNode.next = current.next;
			current.next = newNode;
			this.length++;
		}

		return this.printList();
	}

	//Delete Node
	remove(idx) {
		let current = this.head;
		if(idx === 0) {
			this.head = this.head.next;
			//delete current;
			current = null;
		} else if(idx >= this.length) {
			console.log("Not a valid index");
		} else {
			for(let i = 0; i < idx - 1; i++) {
				current = current.next;
			}
			let temp = current.next;
			current.next = temp.next;
			//delete temp;
			temp = null;

		}
		return this.printList();
	}
}


const myLinkedList = new LinkedList(10);

console.log(myLinkedList);

myLinkedList.append(5);
myLinkedList.append(16);
//console.log(myLinkedList);

myLinkedList.prepend(1);

console.log(myLinkedList);
myLinkedList.insert(2, 4);
myLinkedList.insert(0, 0);
myLinkedList.insert(5, 11);
//console.log(myLinkedList);
let current = myLinkedList.head;

myLinkedList.remove(3);
//myLinkedLIst.printList();
//Print all items in the list
while(current !== null) {
	console.log(current);
	current = current.next;
}
