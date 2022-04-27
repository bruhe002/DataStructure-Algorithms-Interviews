class Node {
	constructor(val) {
		this.value = val;
		this.right = null;
		this.left = null;
	}
	}

class bst {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);
		if(this.root === null) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while(true) {
				if(value < currentNode.value) {
					if(!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				} else {
					if(!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}

	}
	lookup(value) {
		if(!this.root) {
			return false;
		}
		let current = this.root;
		while(current) {
			if(value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else if (value === current.value) {
				return current;
			}
		}

		return false;
	}

	//BREADTH FIRST SEARCH
	breadthFirstSearch() {
		let currentNode = this.root;
		let list = [];
		let queue = [];
		queue.push(currentNode);

		while(queue.length > 0) {
			currentNode = queue.shift(); //Removes element from an array and returns the remove element
			list.push(currentNode.value);
			if(currentNode.left) {
				queue.push(currentNode.left);
			}
			if(currentNode.right) {
				queue.push(currentNode.right);
			}

		}
		
		return list;
	}

	bfsr(queue, list) {
		if(!queue.length) {
			return list;
		}
		let currentNode = queue.shift();
		list.push(currentNode.value);
		if(currentNode.left) {
			queue.push(currentNode.left);
		}
		if(currentNode.right) {
			queue.push(currentNode.right);
		}
		return this.bfsr(queue, list);

	}

	//DEPTH FIRST SEARCH
	DFSInorder() {
		return traverseIO(this.root);	
	}

	DFSPostorder() {
		return traversePO(this.root);
	}

	DFSPreorder() {
		return traversePre(this.root);
	}

}

function traverseIO(node) {
	if(node) {
		traverseIO(node.left);
		console.log(node.value);
		traverseIO(node.right);
	}
}

function traversePO(node) {
	if(node) {
		traversePO(node.left);
		traversePO(node.right);
		console.log(node.value);
	}
}

function traversePre(node) {
	if(node) {
		console.log(node.value);
		traverseIO(node.left);
		traverseIO(node.right);
	}
}

const tree = new bst();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(14);
tree.insert(20);
tree.insert(170);
console.log(tree.lookup(9));
console.log(tree.lookup(14));
console.log(tree.lookup(20));
console.log(tree.lookup(10));
console.log(tree.lookup(170));
console.log(tree.breadthFirstSearch());
console.log(tree.bfsr([tree.root], []));
tree.DFSInorder();
console.log("--------");
tree.DFSPostorder();
console.log("--------");	
tree.DFSPreorder();



function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}

