const express = require('express')
const blog = require('./routes/blog')

const fs = require("fs")

const app = express()
const port = 3000
//middleware
app.use(express.static("public"))
app.use('/blog',blog)

app.use((req,res,next)=>{
      // res.send("logged for middlewaretesting2!!") if use this donot use next it should end here
      // console.log("middleware testing2!!!!")
      console.log(`${Date.now()} and ${req.method}`)
      fs.appendFileSync("logs.txt",`${Date.now()} and ${req.method}\n`)
      next()
})

app.get('/', (req, res) => {
  console.log("hey its a get request");
  res.send('Hello World!')
})

app.get('/index', (req, res) => {
  console.log("hey its a index request");
  res.sendFile('templates/index.html',{root: __dirname})
})

app.get('/api', (req, res) => {
    res.json({a: 1,b: 2,c: 3,d: 4,name : ['harry','jerry']})
})

app.post('/', (req, res) => {
  console.log("hey its a post request");
  res.send('Hello World! it is post ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})