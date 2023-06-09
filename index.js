const express = require('express')
const mongoose=require('mongoose')
var app = express()
//Route
app.get('/',function(req,res){
  res.send('hello world')
})
//MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/employees", {useNewUrlParser: true});
mongoose.connection.once('open',function(){
  console.log('Database connected Successfully');
}).on('error',function(err){
  console.log('Error', err);
})
const router = require('./routes/emp')
app.use('/emp',router)
//Server
app.listen(8000,function(){
  console.log('Server is Up')
})