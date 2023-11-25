// let arr = ['hi', 'i', 'am', 'nikhil']

// let ar = arr[3]

// console.log(ar);

// let [a,b,c,d] = arr

// console.log(d);



let obj = {
    name : 'nik',
    age : 25,
    gender : 'male',

    address: {
        dist : 'nashik',
        st : 'mh'
    }
}

let {name : n,age,gender,address :{dist} } = obj
console.log(n);
console.log(age);
console.log(dist);