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
			current = this.head.next;
			this.head.next = null;
			this.head = current;
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
		this.length--;
		return this.printList();
	}

	//Creates a copy of the list
	reverse() {
		let current = this.head;
		const ll = new LinkedList(current.value);
		current = current.next;
		while(current !== null) {
			ll.prepend(current.value);
			current = current.next;
		}  

		return ll;
	}

	//Creates a reference of the list
	reverseV2() {
		if(!this.head.next) {
			return this;
		}
		let first = this.head;
		this.tail = this.head;
		let second = this.head.next
		while(second) {
			let temp = second.next;
			second.next = first;
			first = second;
			second = temp;
		}
		this.head.next = null;
		this.head = first;
		return this;
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

myLinkedList.remove(3);
myLinkedList.remove(0);
console.log(myLinkedList);

const newList = myLinkedList.reverseV2();
myLinkedList.printList();
newList.printList();

newList.remove(1);

myLinkedList.printList();
newList.printList();


const listA = new LinkedList(1);
const listB = listA.reverse();
listA.printList();
listB.printList();
