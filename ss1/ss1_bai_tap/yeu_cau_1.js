import {courses} from "./list.js"

const getListRating4 = courses.filter(courses => courses.rating >= 4);
console.log(getListRating4);