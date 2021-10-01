  const express = require('express');
  const app = express();
  const path = require('path');

  app.get('/',(req,res)=>{
      res.send('<h1>Hello world</h1>');
  })
  app.get('/about' , (req,res)=>{
      res.sendFile(path.join(__dirname , 'index.html'));
  })

  app.get('/contactus' , (req,res)=>{
      res.status(200).json({ "msg" : "hello from object"});
  })

  app.post('/re',(req,res)=>{
      res.send("<h1>demo of post</h1>");
  })

  app.get('/pa',(req,res)=>{
      res.status(404).redirect("/contactus");
  })
  app.get('*' , (req,res)=>{
      res.send('<h1>This is not found</h1>');
  })
  
  app.listen(7080,()=>{
      console.log('Server Created');
  })