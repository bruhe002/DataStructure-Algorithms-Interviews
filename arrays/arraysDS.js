const strings = ['a', 'b', 'c', 'd'];
//4 items * 4 bytes each = 16 bytes of storage
//

console.log(strings[2]);

//push
strings.push('e');


//pop
strings.pop();
strings.pop();

//unshift
strings.unshift('x');

//splice
strings.splice(2, 1, 'alien');
console.log(strings);
