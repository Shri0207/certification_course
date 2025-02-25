const express = require('express');
const app = express(); 

//middleware
// app.use('/home',(req,res)=>{
//     // console.log(req);
//     res.send('<h1>Hello World</h1>');
//     console.log(res);
// })

// 

//get()
app.get('/sinus',(req,res)=>{
    res.send('<h1>Response from my route-> shri</h1>');
})

app.get('/hello',(req,res)=>{
    res.send('<h1>Response from my route-> hey</h1>');
})

app.get('/shri',(req,res)=>{
    res.send('<h1>Response from my route-> shrishail</h1>');
})

app.listen(8080,()=>{
 console.log('Server is running at 8080');
 })
    