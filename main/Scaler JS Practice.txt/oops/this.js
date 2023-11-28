 // strict mode
//  'use strict'
//  b = 10
//  console.log(b);


 // Non-strinct node
 // here we printing variable without initialising

//  a = 10
//  console.log(a);


 





// this keyword with Non-Strict

// case 1
// console.log(this);   // {} <= empty obj will get


// case 2
// function display(){    
//     console.log(this);    // this will ref. global obj.
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
//             console.log(this);   // global objecty getting
//         }

//          myFun3()
//     }
// }

// obj2.myfun2()











// this keyword  with strict mode

'use strict'
// case 1
// console.log(this);   // {} <= empty obj will get


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














