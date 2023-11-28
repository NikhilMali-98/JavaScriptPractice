class person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    welcome(){
        console.log(`Welcome ${this.name} for be here at ${this.age} age`)
    }
}

let person1 = new person('nikhil', 25)
person1.welcome()
console.log(person1);