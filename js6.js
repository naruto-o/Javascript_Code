const fruits = ['a','b','c','d','f','g','h','j','k'];
for(let i =0;i<fruits.length;i++){
    console.log(i, fruits[i]);
}
for(const fruit of fruits){
    console.log(fruit);
}
const numbers = [1,2,3,4,5,6];
for(const num of numbers){
    console.log(num*2);
}
let result = [];
for(const number of numbers){
     console.log(number *2);
     result.push(number*2);
}
console.log(result);

const double = (numbers) =>{
    let result = [];
    for(const number of numbers){
        result.push(number*2)
    }
    return result;
}
console.log(double([10,20,30,40,50,60]));  

const square = (numbers) =>{
    let result = [];
    for(const number of numbers){
        result.push(number**2);
    }
    return result;
}
console.log(square([1,2,3,4,5,6]));