const numbers = [1,2,3,4,5];
const sumArray = (numbers) =>{
    let result = 0;
    for(let  i =0;i<numbers.length;i++){
        result += numbers[i];
    }
    return {result};
}
console.log(sumArray(numbers));