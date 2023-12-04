
// setTimeout will always take time and call back function


// console.log('before');
// function greet(){
//     console.log('hellow set Timeout');
// }

// setTimeout(greet, 5000)
// console.log('after');







// set Interval 
function hellow (){
    console.log('hellow');
}

let timer = setInterval(hellow, 1000)

setTimeout(function(){
    clearInterval(timer);
},5000)