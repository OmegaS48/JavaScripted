var student={
    studname:"Simon",
    Rank:31000,
    class:4,
    section:"D",
    pass:true
};
console.log(student);
console.log(student.studname);
console.log(student.Rank);
console.log(student["class"]);
console.log(student.section);
console.log(student.pass);

student.Rank=student.Rank +9812;
console.log(student.Rank);
student.Rank=6400;
console.log(student.Rank);
