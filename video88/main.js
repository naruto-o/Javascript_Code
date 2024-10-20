const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('About us')
  })
  app.get('/contact', (req, res) => {
    res.send('Contact me!')
  })
  app.get('/blog', (req, res) => {
    res.send('Hello blog')
  })
  app.get('/blog/intro-to-java', (req, res) => {
    res.send('Welcome to java-8-blogs!')
  })
  app.get('/blog/intro-to-python', (req, res) => {
    res.send('python is a modern language ')
  })
  //now comes the express

  app.get('/blog/:slug', (req, res) => {
    res.send(`Hello! ${req.params.slug}`)
    console.log(req.query);
    
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})