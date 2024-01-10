const fs = require('fs');
const ds ='Hi world this is           hemanth ';


fs.writeFile('./a.txt',ds,'utf-8',(error)=>{
  if(error)console.log(error);
  fs.readFile('./a.txt','utf-8',function(err,data){
    console.log(data);
  })
})