let students = [
    {firstName: "Adebayo", studentId: 1},
    {firstName:"Samuel", studentId: 2},
    {firstName:"Kingsley", studentId:3},
    {firstName:"Adebayo", studentId:4}
];

let adebayoids = students.filter(student => student.firstName === "Adebayo").map(id => id.studentId);

alert(adebayoids);
