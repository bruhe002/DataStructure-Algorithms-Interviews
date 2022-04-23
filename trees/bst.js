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
preOrderPrint(tree.root);

function preOrderPrint(node) {
	if(node !== null) {
		console.log(node.value);
		preOrderPrint(node.left);
		preOrderPrint(node.right);
	}
}

function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}
