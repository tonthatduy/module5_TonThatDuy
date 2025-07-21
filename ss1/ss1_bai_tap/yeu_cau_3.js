import {courses} from "./list.js";

let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];

const newArray = [...courses, ...addedCourses];
console.table(newArray);
const allCourses = courses.concat(addedCourses);
console.table(allCourses);

