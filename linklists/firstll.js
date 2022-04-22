


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
		const newNode = {
			value: val,
			next: this.head
		}
		this.head = newNode;
		this.length++;
	}
}


const myLinkedList = new LinkedList(10);

console.log(myLinkedList);

myLinkedList.append(5);
myLinkedList.append(16);
//console.log(myLinkedList);

myLinkedList.prepend(1);

console.log(myLinkedList);
let current = myLinkedList.head;

//Print all items in the list
while(current !== null) {
	console.log(current);
	current = current.next;
}
