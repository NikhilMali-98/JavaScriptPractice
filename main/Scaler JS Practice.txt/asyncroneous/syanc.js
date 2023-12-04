const fs = require('fs')

console.log('first line')

// let data = fs.readFileSync('syanc2.txt')

fs.readFile('syanc2.js', cb1)
function cb1(error,data){
    if(error){
        console.log(error);
    }
    console.log(data);
}
console.log(data)

console.log('last line')