let user = {
	age: 54,
	name: "Kyle",
	magiv: true,
	scream: function() {
		console.log('ahhhhhh!');
	}
}

console.log(user.age); //O(1)
user.spell = 'abra kadabra' //O(1)
user.scream(); //o(1)

console.log(user);

const a = new Map();
const b = new Set();
