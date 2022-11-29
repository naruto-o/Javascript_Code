const groceries = ['banana','apple','peach','grapes'];
// console.log(groceries);
console.log(groceries[0]);
console.log(groceries[1]);
console.log(groceries[3]);
console.log(groceries[2]);
groceries.push('cookie');
groceries.push('peda');
console.log(groceries);

// Array Slice 

console.log(groceries.slice(0,2));
console.log(groceries.slice(3,6));
console.log(groceries.splice(1,4));

//array methods (slice,push,indexof,length)
console.log(groceries.indexOf('grapes'))
console.log(groceries.length)