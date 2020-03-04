const students = [
    {id : 101, name : "Fokrul Islam Mehedi"},
    {id : 102, name : "MD Afsar Uddin"},
    {id : 103, name : "MD Emon"},
    {id : 104, name : "MD Nyeem"},
    {id : 105, name : "MD Hasib"},
];

const studentsId = students.map(students => students.id);
console.log(studentsId);

const studentsName = students.map(students => students.name);
console.log(studentsName);

const specificStudents = students.filter(students => students.id < 104);
console.log(specificStudents);
console.log(specificStudents.map(students => students.name));

const specificStudent = students.find(students => students.id === 101);
console.log(specificStudent);
