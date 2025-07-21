// const students = [
//     { name: "An", age: 20, scores: [8, 7.5, 9] },
//     { name: "Bình", age: 21, scores: [6, 5, 7] },
//     { name: "Chi", age: 22, scores: [9.5, 8.5, 10] }
// ];
// :dart: Yêu cầu:
//     Dùng
// map() để tính điểm trung bình mỗi sinh viên.
//     Dùng filter() để lấy danh sách sinh viên có điểm trung bình >= 8.
// Dùng destructuring để truy cập tên và điểm số.
//     Dùng template literals để in ra danh sách sinh viên như sau:
//     "Chi - Age: 22 - Avg Score: 9.33"

const students = [
    {name: "An", age: 20, scores: [8, 7.5, 9]},
    {name: "Bình", age: 21, scores: [6, 5, 7]},
    {name: "Chi", age: 22, scores: [9.5, 8.5, 10]}
];

const avg = students.map(students => students.name + "," + students.age + "," + students.scores.reduce((sum, num) => (sum + num), 0) / students.scores.length);
console.log(avg)
const listAvg = students.filter(students => students.scores.reduce((sum, num) => (sum + num), 0) / students.scores.length >= 8);
console.log(listAvg);
const students1 = students.map(({name, scores}) => ({name, scores}));
console.log("Thông tin: ", students1);
students.forEach(students => {
    const avgScore = students.scores.reduce((sum, num) => (sum + num), 0) / students.scores.length;
    console.log(`${students.name} - Age:${students.age} - Avg Score: ${avgScore}`);
})

let array = [10, 15, 20, 30, 35];
// tính tổng các phần tử chẵn
const sum = array.filter(array => array % 2 === 0).reduce((sum, num) => (sum + num), 0);
console.log(sum);
