/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
<<<<<<< HEAD
  return new Promise((resolve,reject)=>{
    setTimeout(()=>(resolve()),milliseconds);
  });
=======
>>>>>>> fc7890a68a2e92ce9c052e88ae0007db2d2601b8
}

module.exports = sleep;
