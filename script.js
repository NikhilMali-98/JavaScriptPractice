// console.log('Hellow Nikhil')
// let a = 20
// console.log(a)
// var greet = 'hellow'
// console.log(typeof(a))


// // arrays 
//  var array = ['nikhil', 1998, 'varad', 1992, true]
// console.log(typeof(array)+" - "+ array)
// console.log(array[2])


// //replacing array data 
// array[2] = "nil"
// console.log(array+ array.length)


//arrays method
// var arr =[12,13,14,15,16]
//arr.pop()
//arr.push(17)
//arr.shift()   //will remove ele. from top
//arr.unshift(10)  // will add ele at start
//console.log(arr)


// objects in js
// var person = {
//     name: "nikhil",
//     age : 25,
//     city : 'nashik'
// }

// // . notation
// console.log( typeof(person) +" - "+ person.name);

// //braket notataion
// console.log(person["name"])

// var cap = {
//     name : "nikhil",
//     age : 25,

//     friend : ['amol', 'aarti', 'prajwal'],
//     address : {
//         state : 'mh',
//         dist : 'nashik'
//     },
//     isValid : true
// }
// // console.log(cap)
// // console.log(cap.friend[1]);
// // console.log(cap.address.state);

// cap.job = 'NA'
// delete cap.age;
// console.log(cap)



// //  Conditional and Control Statements

// // if-else 
// var score = 95
// if(score > 90)
// {
//     console.log("will get bonus");
// }else if (score >65 && score<=89)
// {
//     console.log("will get sal");
// }else { console.log("not anything ");}

// // loop
// var a = 'hellow nikhil'
// for(let i=0; i<12; i++)
// {
//     console.log(a[i]);
// }

// var square = [4,9,25,36]
// for(let i=0; i<square.length; i++)
// {
//     console.log(Math.sqrt(square[i]));
// }

// while loop
// var i =1
// while(i<5)
// {
//     console.log(i);  i++
// }


// do- while
// var i =1;
// do{
//     console.log("do while loop");
//     i++;
// }
// while(i<=3)



// for-in loop 

// var col = {
//     pri: 'red',
//     sec: 'blue',
//     ter: 'green',
//     four: 'yellow'
// }

// for(var colour in col)
// {
//     console.log(colour+" = "+ col[colour]);
// }

// var col = ['red', 'green', 'pink']
// for(var colour in col)
// {
//     console.log(col[colour]);
// }



//for- of loop
// var score = [50,60,70,80]
// for(var sco of score)
// {
//     console.log(sco);
// }