/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
const port = 3000 ;
const app = express();

app.use(express.json());

app.get('/files',function(req,res){

  fs.readdir('files',function(err,data){

    if(err){
      res.status(500).json({error:'Failed to retrieve files'});
    }
    res.json(
      data
    );
    // console.log(data);
  });

});

app.get('/file/:filename',function(req,res){
  const name = req.params.filename ; 
  fs.readFile(`files/${name}`,'utf-8',function(err,data){
    if(err){
      res.status(404).send('File not found');
    }
    res.json(
      data
    );
  })
});

app.all('*',(req,res)=>{
  res.status(404).send('Route not Found');
})


app.listen(port,()=>(console.log(`listening to port ${port}`)))
=======
const app = express();

>>>>>>> fc7890a68a2e92ce9c052e88ae0007db2d2601b8

module.exports = app;