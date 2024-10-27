const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/templates/index.html')
})

app.post('/button-clicked',(req,res)=>{
    console.log("button clicked");
    res.send("Button was clicked")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})