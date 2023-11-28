class animal{
    sound(){
        console.log('animal make diff sound');
    }
}

class dog{
    sound(){
        console.log('dog bark');
    }
}

class cat{
    sound(){
        console.log('cat maee');
    }
}

let a = new animal()
let tommy = new dog()
let percy = new cat()

a.sound(); 
tommy.sound();
percy.sound();