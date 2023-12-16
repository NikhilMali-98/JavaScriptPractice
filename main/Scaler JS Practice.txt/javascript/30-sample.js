// write a logic for converting array into object in javascript.

function arrayIntoObject(array)
{
    const object = {};
    for(let i=0; i<=array.length; i++)
    {
        object[i] = array[i];
    } 
    return object;
}

let array = ["nikhil", "amol", "varadrajan"];
let obj = arrayIntoObject(array);
console.log("object : "+obj);

