// function test (){
//     let a = 2

//     function test2(){
//         console.log(a);
//     }
//     return test2
// }

// let fun = test()
// console.log(fun);

// fun()


function greet(){
    let name = 'nik'
    function displyName(){
        console.log('hi '+name );
            
          let age = 25
        function displayAge(){
            console.log('age is '+age+ ' and name is '+name);
        }
        return displayAge
    }
    return displyName
}

let g1 = greet()
console.log(g1);
g1()  // calling displayName method

let g2 = g1()
console.log(g2);
g2()  // calling displayAge method