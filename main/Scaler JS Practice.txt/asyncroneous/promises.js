
// HOW TO CREATE PROMIS 

let myPromise = new Promise(function(resolve, reject){
    const a = 4 
    const b = 5

    setTimeout (()=>{
        if (a===b){
            resolve("A is equal to B")
        }else{
            reject('not equal')
        }
    },2000)
})


// pending state
// console.log(myPromise)


// fulfill case = then method
// consuming promises 
myPromise.then(function(result){
  console.log(result);
})  // fullfilled state

myPromise.catch(function(failRes){
    console.log(failRes);
}) // rejected state



// noe promise will get settled