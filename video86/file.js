const { log, error } = require("console");
const fs  = require("fs")

console.log("starting");
// fs.writeFileSync("shikhar.txt","shikhar will achieve his aim")
fs.writeFile("shikhar2.txt","shikhar will achive his goal and his aim",()=>{
        console.log("done")
        fs.readFile("shikhar2.txt",(error,data)=>{
            console.log(error,data.toString())
        })
})
console.log("ending");


