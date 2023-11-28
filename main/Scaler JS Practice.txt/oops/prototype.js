
// let obj = {}

// console.log(obj);

// let percson = {
//     name: 'John',
//     age: 30,
// }
// // console.log(percson)








// call , apply and bind 

let per1 = {
    name : 'nik',
    age : 25,

    print : function(){
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}

let per2 = {
    name : 'pra',
    age : 52,
}

// call
per1.print.call(per2)   // here we use call an get properties of per2 obj



let per3 = {
    name : 'nik',
    age : 25, 
} 

let print = function(city){
    console.log(`name is ${this.name} and age is ${this.age} and live in ${city}`);
}

print.call(per2, 'nashik')
// apply
print.apply(per2, ['nashik'])
// bind
let funStore = print.bind(per1, 'mumbai')
console.log(funStore);
funStore()
