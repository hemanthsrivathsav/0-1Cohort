const express = require("express");
const bodyParser = require('body-parser');
const fs = require('fs')
const app = express();
const port = 3000;
app.use(express.json());
app.use(bodyParser.json());

let ids = 0 ;

app.get('/todos', (req,res)=>{
  fs.readFile('todos.json','utf-8',(err,data)=>{
    if (err){
      res.status(404).json({err:"File not Found."});
    }else{
      res.send(data); 
    }
  })
});

app.get('/todos/:id',(req,res)=>{
  const id = parseInt(req.params.id);
  fs.readFile('./todos.json','utf-8',(err,data)=>{
    if(err){
      res.status(500).json({err:'File not Found.'})
    }else{
      const todos = JSON.parse(data);
      let ele = null ;
      todos.forEach(element => {
        if(element.id === id ){
          ele = element ;
        }
      });
      if(ele){
        res.send(ele);
      }else{
        res.send("ID not Found.");
      }
    }
  });
});

app.post('/todos',(req,res)=>{
  fs.readFile("./todos.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ err: 'Error reading the file.' });
    } else {

      const todos = JSON.parse(data);
      const todoItem = {
        id : todos.length+1,
        title : req.body.title,
        description : req.body.description,
        completed : false
      }
      todos.push(todoItem);
      
      fs.writeFile('./todos.json',JSON.stringify(todos,null,2),(err)=>{
        if(err){
          res.status(201).json({err:"Error in writing the File."})
        }else{
          res.send("Added todo Successfully.");
        }
      });
    }
  });
});

app.put('/todos/:id',(req,res)=>{
  fs.readFile("./todos.json", "utf-8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const id = parseInt(req.params.id);
    const status = req.body.completed ;
    const newTodoItem ={
      id : id,
      title : req.body.title,
      description : req.body.description,
      completed : status
    } ;
    
    for(let i=0 ; i<todos.length ; i++){
      if( todos[i].id === id ){
        todos[i].completed = status ;
        todos[i] = newTodoItem ;
        fs.writeFile('./todos.json',JSON.stringify(todos,null,2),(err)=>{
          if(err) throw err ;
          res.send("Succesfully Updated.");
        });
      }
    }   
    //res.json({error:"Incorrect inputs."})
  });
});

app.delete('/todos/:id',(req,res)=>{
  fs.readFile('./todos.json','utf-8',(err,data)=>{
    if(err) throw err ;
    const todos = JSON.parse(data);
    const id = parseInt(req.params.id);
    const indx = todos.indexOf(todos.find((element)=>element.id === id));
    if (indx === -1){
      res.status(404).send("ID Not Found.");
    }else{
      todos.splice(indx,1);
      fs.writeFile('./todos.json',JSON.stringify(todos,null,2),(err)=>{
        if(err) throw err ;
        res.send("Succesfully Deleted. ");
      })
    }
  });
});

app.listen(port,()=>(console.log(`listening on port ${port}`)));

app.all('*',(req,res)=>{
  res.status(404).send("ROute Not FOund.")
})

module.exports = app ;