let count  =0;
let save_el = document.getElementById('save-el');
console.log(save_el)
function increment(){
    count++;
    console.log(count);
    document.getElementById('el-count').innerHTML = count
}
let clearCount = 0;
function clearScreen(){
    document.getElementById('el-count').innerHTML =     clearCount
    count = 0;
}
function save(){
    let savedCount = document.getElementById('el-count').innerHTML
    console.log(savedCount); 
      //here i use text content in addition of inner text because inner text cannot and ffails in sometime human not readable spaces so text content works fine
      save_el.textContent +=savedCount + "-";        
      document.getElementById('el-count').innerHTML =     clearCount
      count = 0;   
}
// let save_el = document.getElementById('save-el');

