const students = [
    {
        name: "Rohit",
        marks: 95
    },
    {
        name: "Aman",
        marks: 93
    },
    {
        name: "Shradha",
        marks: 97
    }
];
let gpa = students.map((el)=> {
    return el.marks / 10;
});

gpa.forEach((el)=>{
    console.log(el);
});