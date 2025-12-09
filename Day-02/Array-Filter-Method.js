let students = [
    {firstName: "Adebayo", studentId: 1},
    {firstName:"Samuel", studentId: 2},
    {firstName:"Kingsley", studentId:3},
    {firstName:"Adebayo", studentId:4}
]
// Above is an array that holds information (name & id) of 4 students.
// Let's see if I can display the ids of students named "Adebayo"

function findAdebayo(student){
    return student.firstName === "Adebayo";
}
//The above function takes the object student and returns T/F if the firstName is "Adebayo"

console.log(students.filter(findAdebayo)); 
//Filter returns an array of the students(represented as objects in this case)

//Writing the "findAdebayo" function using the arrow function method.

student => student.firstName === "Adebayo"