const student = {
    name: "Rohit",
    age: 21,
    prop: this, // global scope // prints window object
    getName: function(){ // parent scope (this) = student
        console.log("This is: ", this);
        return this.name;
    },
    getAge: ()=>{ // lexical scope // parent scope (this) = window object
        console.log("This is: ", this);
        return this.age
    },
    getInfo1: function(){
        setTimeout( ()=> {
            console.log(this); // this == student
            // as parent of parent = funtion -> student 
        }, 2000);
    },
    getInfo2: function(){
        setTimeout( function() {
            console.log(this); // this = window
            // as parent who is calling thisa function here is setTimeout, and it is a funtion of window object
        }, 2000);
    }
};