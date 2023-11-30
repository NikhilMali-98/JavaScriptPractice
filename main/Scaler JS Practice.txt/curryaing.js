
let sum = function(x,y){
    console.log(x+y);
}

sum(2,5)





// currying approch 
let sumCurrying = function(x){
    return function(y){
        console.log(x+y);
    }
}

let sunNo = sumCurrying(2)
sunNo(4)