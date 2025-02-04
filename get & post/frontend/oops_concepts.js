
// Factory Function
// function personMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         }
//     };

//     return person;
// }

// let p1 = personMaker("Rohit", 21);



// New Operator
// Constructors // define constructor name with capital letter
// constructors doesn't returns anything
// function Person(name, age){
//     this.name = name;
//     this.age = age;   
// }

// Person.prototype.talk = function() {
//     console.log(`Hi, my name is: ${this.name}`);
// }

// let p1 = new Person("Rohit Dutta", 22);
// let p2 = new Person("Raj Das", 21);





// Classes implementation- name should be always in caps
class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`Hi, my name is: ${this.name}`);
    }
}

let p1 = new Person("adam", 25);
let p2 = new Person("eve", 25);