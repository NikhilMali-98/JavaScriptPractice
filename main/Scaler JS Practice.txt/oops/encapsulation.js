
function person(name, age){
    var name = name
    this.age = age

    this.getName = function(){
        return name;
    }
}

let per1 = new person('Nik',25)
per1.age = 28      // by this way we can change it

console.log(per1.getName());  // only now we can get name