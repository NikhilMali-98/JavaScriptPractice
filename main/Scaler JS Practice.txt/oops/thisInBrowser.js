

        // WINDOW 
// this keyword with Non-Strict in BROWSER

// case 1
// console.log(this);   // we will get window object


// case 2
// function display(){    
//     console.log(this);    // we will get window object
// }

// display()


// case 3
// let obj = {
//     name : 'nikhil',
//     age : 25,

//     myfun : function(){
//         console.log(this);   // object itself
//     }
// }

// obj.myfun()


// case 4
// let obj2 = {
//     name : 'nikhil',
//     age : 25,

//     myfun2 : function(){
//         function myFun3() {
//             console.log(this);   //we will get window object
//         }

//          myFun3()
//     }
// }

// obj2.myfun2()











// this keyword  with strict mode

'use strict'
// case 1
// console.log(this);   // we will get window object


// case 2
// function display(){    
//     console.log(this);    // undefine 
// }

// display()


// case 3
// let obj = {
//     name : 'nikhil',
//     age : 25,

//     myfun : function(){
//         console.log(this);   // object itself
//     }
// }

// obj.myfun()


// case 4
// let obj2 = {
//     name : 'nikhil',
//     age : 25,

//     myfun2 : function(){
//         function myFun3() {
//             console.log(this);   // undefined
//         }

//          myFun3()
//     }
// }

// obj2.myfun2()
