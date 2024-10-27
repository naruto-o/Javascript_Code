import mongoose from  "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";  

await mongoose.connect("mongodb://localhost:27017/")


const app = express()
const port = 3000

app.get('/',(req,res) =>{
    const todo = new Todo({name:"Hey first to do",desc:"descriptionof this to do",isDone:false})
    todo.save()
    res.send("hello world!!")
})
app.get('/a',async(req,res) =>{
    let todo = await Todo.findOne({})
    res.json(todo)
})
app.listen(port,()=>{
    console.log(`Example app listening from port ${port}`)
})