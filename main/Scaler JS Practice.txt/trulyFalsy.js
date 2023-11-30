let a = ''
if(a)
{
    console.log('i am truly');
}
else{
    console.log('i am falsy');
}


// always falsy 
//  false, 0, -0, 0n(BigInt zero)
//  '' , " " , `` (empty string)
// null , undefined, NaN





(function () { 
    if ((-100 && 100 && "0") || [] === true || 0) {

    console.log(1) //#
    
    if ([] || (0 && false)) {
    
    console.log(2); //# 
}
    
    if (Infinity && NaN && "false") {
    
    console.log(3);
    
    if ("") {
    
    console.log(4);
    
    }
    
    } else {
    
    console.log(5); //#
    
    if (({} || false === "") && !(null && undefined)) { 
        console.log(6); //#
    
    }
    }
}
    
})();




// The first condition is (-100 && 100 && "0") || [] === true || 0. This condition evaluates to true, as the OR (||) operator returns the first truthy value, which is (-100 && 100 && "0"). Therefore, the code inside the first block executes, and console.log(1) is printed.

// The second condition is [] || (0 && false). The first part [] is truthy, so the second part (0 && false) is not evaluated. Therefore, the code inside the second block executes, and console.log(2) is printed.

// The third condition is Infinity && NaN && "false". This condition evaluates to NaN (falsy), so the else block is executed, and console.log(5) is printed.

// Inside the else block, there's another condition ({} || false === "") && !(null && undefined). The first part {} is truthy, but the second part false === "" is false. The NOT (!) operator negates the result, so the overall condition is true. Therefore, the code inside this block executes, and console.log(6) is printed.


//1
//2
//5
//6
