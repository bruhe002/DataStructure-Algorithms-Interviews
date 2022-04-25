const letters = ['a', 'd', 'e', 'z', 'r', 'b'];
const basket = [2,54,34,2,1,7,8];

console.log(letters.sort());
console.log(basket.sort(function (a, b) {
	return a - b;
}));
