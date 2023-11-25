let a =2
let test = function(){
    console.log(a);
}


let test2 = function(a){
    console.log(a+2);
}


let test3 = function(a,b){
    console.log(a+b);
}

test();     //2
test2(3);   // 5
test3(4,5)  // 9
test3(2)    // NAN

let test4 = () =>{
    console.log(a);
}
test4()
