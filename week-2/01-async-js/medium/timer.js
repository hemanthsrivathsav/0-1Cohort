let intervalId= null ;


function updateTimer(){
  const time = new Date();
  let h = time.getHours() ;
  let m = time.getMinutes() ;
  let s = time.getSeconds();
  let p = "";
  
  h = h< 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  
  p = h<12 ? 'AM' : 'PM' ;
  const formattedTime = (`${h}:${m}:${s}  ${p}`);
  if(intervalId==null){
    document.getElementById('timer').innerText = "00:00:00";
  }else{
    document.getElementById('timer').innerText = formattedTime;
  }
}

document.getElementById('startBtn').addEventListener('click',function(){
  clearInterval(intervalId);  
  intervalId = setInterval(function(){
    updateTimer();
    },1000);
});

document.getElementById('stopBtn').addEventListener('click',function(){
  clearInterval(intervalId);
  intervalId = null ;
  updateTimer();
});