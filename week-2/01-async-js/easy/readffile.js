const fs = require('fs');

fs.readFile('./a.txt','utf-8',function(err,data){
  console.log(err);
  console.log(data);
})

setTimeout(function(){
  console.log('inside Timeout');
},2000);

console.log('first print');
let a = 1 ;
for (let i= 1 ; i<10000000000; i++){
  a = a+1 ;
}
console.log(a);