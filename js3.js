function saymyname(){
    console.log('Shikhar');
}
saymyname();
function saymyname2(name){
    console.log(name);
}
saymyname2('Shikhar');

function greeting(name){
    console.log("HI "+name+" nice to meet you")
   
}
greeting('shikhar');

function sum(a,b){
        return a+b;
}
sum(2,2);
console.log(sum(2,2));  
let num1 = sum(2,2);
console.log(num1);

const sumarrow = (a,b) => {
    return a+b;
}
const sumarrow2 = (a,b) => a+b;

console.log(sumarrow(10,20));
console.log(sumarrow2(100,50));