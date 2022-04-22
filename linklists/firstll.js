


class LinkedList {
	constructor(val) {
		this.head = {
			value: val,
			next: null
		}
		this.tail = this.head;
		this.length = 1;
	}
}


const myLinkedList = new LinkedList(10);

console.log(myLinkedList);
