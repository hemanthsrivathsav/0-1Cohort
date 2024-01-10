

console.log('----TIME----');
const intervalId = setInterval(function(){
  
  const time = new Date();
  let h = time.getHours() ;
  let m = time.getMinutes() ;
  let s = time.getSeconds();
  let p = "";

  h = h< 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  
  p = h<12 ? 'AM' : 'PM' ;
  
  /* 
  It uses \r to return the cursor to the beginning of the line, 
  and process.stdout.clearLine to clear the existing line. 
  This way, the updated time is printed in the same line 
  without creating multiple lines.
  */ 
  process.stdout.write('\r');
  process.stdout.clearLine();
  process.stdout.write(`${h}:${m}:${s}  ${p}`);

},1000);




// console.log('-------------')