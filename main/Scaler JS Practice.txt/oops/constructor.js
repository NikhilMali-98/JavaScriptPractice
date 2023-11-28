
function createCar(name, co, col){
    this.name = name
    this.co = co
    this.col = col

    this.drive = function(){
        console.log(`i ama driving ${this.col} colour`);
    }
}

let car1 = new createCar('audi','tata','gray')
let car2 = new createCar('jagaur', 'tata', 'purple')

car1.drive()