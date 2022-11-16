let sum = 0;
 n = prompt("Enter your number");
 n = Number.parseInt(n);
for(let i =0;i<n;i++){
  sum += (i+1);
}
console.log("the sum of first"+n+"natural number is"+sum);
