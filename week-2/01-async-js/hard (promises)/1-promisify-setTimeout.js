/*
<<<<<<< HEAD
    Write a function that returns a promise that resolves after
     n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
          resolve();
        },n*1000);
    }); 
}


=======
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
}

>>>>>>> fc7890a68a2e92ce9c052e88ae0007db2d2601b8
module.exports = wait;
