
function count(start,num){
  if(start===num+1){
    return 
  }else{
    console.log(start)
    setTimeout(()=>count(start+1,num),1000);
  }
}

count(1,8);