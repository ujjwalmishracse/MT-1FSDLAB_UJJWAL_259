//given an array of student objects containing name, roll number and marks, find the top three students using sort().


const students = [
    { name:"Edward",rollNo:1206, marks:65 },
    { name:"Bella",rollNo:1207, marks:68 },
    { name:"Jacob",rollNo:1208, marks:71 },
    { name:"carlos",rollNo:1209, marks:83 },
    { name:"Alice",rollNo:1210, marks:63 },
    { name:"Robert",rollNo:1211, marks:90 }
];

students.sort((a, b) => b.marks - a.marks);

const topThree = students.slice(0, 3);

console.log("Top 3 Students:");

topThree.forEach((student, index)=>{
    console.log(
        `${index + 1}.Name:${student.name},Roll No:${student.rollNo},Marks:${student.marks}`
    );
});
