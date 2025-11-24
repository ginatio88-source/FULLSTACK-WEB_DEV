let students = [
    {
        name: "Alice",
        age: 20,
        isEnrolled: true
    },
    {
        name: "Bob",
        age: 22,
        isEnrolled: false
    },
    {
        name: "Charlie",
        age: 19,
        isEnrolled: true
    }
]

students.forEach(function(student){
    console.log(student.name);
});

students.forEach(student)=>{
    if(student.isEnrolled){
        console.log(student.name);
    }
}

students.push{
    name: "David",
    age: 21,
    isEnrolled: true
}

students.pop();