const fs = require('fs');

let file_d='';

fs.readFile('./x.txt','utf-8',function(err,data){
  let st = data ;
  st = st.replace(/[\s]/g,' ');
  st = st.split(" ");
  console.log(`File contents before Edit :${data}`)
  st.forEach(element => {
    if (element!==''){
      file_d +=element+' ' ;
    }
  });

  fs.writeFile('./x.txt',file_d,'utf-8',(error)=>{
    if(error)console.log(error);
    fs.readFile('./x.txt','utf-8',function(err,data){
      console.log(`File Contents after Edit :${data}`);
    });

  });
  
});



