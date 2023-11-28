
// classical inheritaance

class person{
    constructor(name, age){
        this.name = name
        this.age = age 
    }

    welcome(){
        console.log(`Welcome ${this.name}`);
    }
}

class teacher extends person{
        constructor(name, age, subject){
            super(name, age)
            this.subject = subject
        }

        test(){
            super.welcome()
        }
}

class student extends person {
    constructor(name, age, cgpa){
        super(name, age)
        this.cgpa = cgpa
    }
}

let person1 = new person('nikhil', 25)
console.log(person1);

let teacher1 = new teacher('nayna', 38, 'math')
teacher1.test()
console.log(teacher1);

let student1 = new student('varad', 38, 7.5)
console.log(student1);