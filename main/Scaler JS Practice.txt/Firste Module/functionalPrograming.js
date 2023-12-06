
// // imperative && Declarative way to code

// // imperative way
// //having no check it's square is even or not
// const a = 4
// let isEven;
// if(a*a % 2 == 0)

//     isEven = true;
// }
// else isEven

// console.log(isEven + " - " + a*a);


// // Declarative way
// const checkSquare = (x) =>(x*x %2 ==0 ? true)
// console.log(checkSquare(4));





// pure function

// var a = 10
// function sub(x){
//     return(x-a);
// }
// console.log(sub(2))

// // Im-pure function
// var a = 10
//){
//     console.log+a);
//     a++
// }
// add(// add(2)
// add(2)






// Higher order function

//simple approch
// let arr = [1,2,3,4,5,6]
// let sqArr = []

// for(let i=0; i<arr.length; i++)
// {
//     sqArr.push(arr[i]*arr[i])
// }
// console.log(sqArr);

// HOF approch =>map 
// const num = [1,2,4,5,6]
// const sqNum = num.map(function(n){
//     return n*n
// })console.log(sqNum);
// rupee into doller
// const transaction = [100,200,450,941]
// const intoDoller = 80

// let transact = transaction.map((amount)=>{
//     return amount/intoDoller.toFixed(

// console.log(transact);
//through forEach Loop
// let terIntoDoller = transaction.forEach console.log((amount/intoDoller).toFixed(0// })

// console.log(terIntoD);





// find HOF / findIndex 
// const transaction = [10,42,20,45,-45,60,7]

// let first = transaction.find(function(n){
//     return n>22
// })

// console.log('first : ' +first); //42

// let firstIndex = transaction.findIndex(function(n){
//     return n>22
// })

// console.log("firstIndexVal : " + firstIndex)    //1


// some method 
// let result = transaction.some(function(n){
//     return n

// console.log(result);


// // every method 
// let value = transaction.every(function(n){
//     return n<0
// })

// console.log(value);










// you have to check even no of arraya an put thme into seperate array

let no = [1,2,3,4,5,6]
// simple approch
// let = []
// for (let i=0; i<no.length; i++)
// {
//     if(no[i]%2 == 0)
//     {
//         evenArr.push(no[i])
//     }
// }

// console.log(evenArr);


// filter approch 
// let evenArr = no.filter(function(n){
//     return n%2 ==0
// } )

// console.log(evenArr);










// reduce // need sum of the every element in array let sum = no.reduce(function(acc, val) {
//       let update = acc+val
//       return update
// }, 0)
// console.log(sum);


// let mul = no.reduce(function (acc, val){
//     let v = acc*val
//     return v
// },1)

// console.log(mul);










// chanining method

let arr = [
    { name : 'nikhil', age : 25 , gen : 'M'},
    { name : 'varad', age : 28 , gen : 'M'},
    { name : 'apurva', age : 25 , gen : 'F'},
    { name : 'aarti', age : 23 , gen : 'F'},
    { name : 'prajwal', age : 24 , gen : 'M'},
]


// simple approch 
// let males = arr.filter(function (obj) {
//     return obj.gen == 'M'
// })

// console.log(males);

// let ageOfMale = males.map(function (males) {
//     return males.age
// })

// console.log(ageOfMale);


// chaining approch 
let ageOfMale = arr.filter(function (obj){
    return obj.gen == 'M'
}).map(function(male){
    return male.age
})

console.log(ageOfMale);




 // Cal positive no and their addition
let Nomber = [1,2,3,-10,4]

let calPositive = Nomber.filter( function (n) {
    return n>0
}).reduce(function (acc, calPositive) {
        let sum = acc+ calPositive
    return sum
}, 0)

console.log(calPositive);