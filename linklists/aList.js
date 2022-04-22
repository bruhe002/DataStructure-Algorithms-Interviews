const basket = ['apples', 'grapes', 'pears'];

//linked list: apples --> grapes --> pears

//apples
//8947 --> grapes
//	 8742 --> pears
//		   372 --> null
//
//
//Example of pointers
let obj1 = { a: true };


let obj2 = obj1; //obj2 is a pointer to obj1

obj1.a = 'booyah!'; //Changing one changes the other
delete obj1; //Deleting obj1 does not affect obj2
obj2 = "hello";
console.log('1', obj1); //This will show an error
console.log('2', obj2);
