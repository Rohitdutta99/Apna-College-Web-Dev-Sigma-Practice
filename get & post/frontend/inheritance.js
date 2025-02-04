class Person {
    constructor(name, age) {
        console.log("person class constructor");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        console.log("student class constructor");
        super(name, age); // aprent class constructor is being called
        this.marks = marks;
    }
}


class Teacher extends Person {
    constructor(name, age, subject) {
        console.log("teacher class constructor");
        super(name, age); // parent class constructor is being called
        this.subject = subject;
    }
}