

function cnt(n){
  let st = 1;
  const intervalId = setInterval(function() {
      console.log(st);
      if(st===n){
        clearInterval(intervalId);
      }else{
        st++;;
      }
    }
    ,1000);
}

cnt(5);

  
