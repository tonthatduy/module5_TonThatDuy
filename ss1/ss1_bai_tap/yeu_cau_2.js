import {courses} from "./list.js";

const getListBelow4 = courses.filter(courses => courses.rating < 4);
getListBelow4.forEach(courses => {
    console.log(`<${courses.id}> - <${courses.title}> - <${courses.rating}> `);
})

