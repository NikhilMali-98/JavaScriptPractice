// // spread operator {...}


// let firstPerson ={
//     name : 'adam',
//     age : 23,

//     address :{
//         city :'new york',
//         country: 'usa'
//     }
// }

// let secoundPerson = {...firstPerson}   // shallow copy

// secoundPerson.name = 'nik'
// secoundPerson.address.city='nashik'  // due to spread operatior it will not change
// firstPerson.age = 50
// console.log(firstPerson);
// console.log(secoundPerson);









// deep copy 
// Json.parse & Json.stringify


let firstPerson ={
    name : 'adam',
    age : 23,

    address :{
        city :'new york',
        country: 'usa'
    }
}

let secoundPerson = JSON.parse(JSON.stringify(firstPerson))

secoundPerson.name = 'nik'
secoundPerson.address.city='nashik'  
firstPerson.age = 50
console.log(firstPerson);
console.log(secoundPerson);