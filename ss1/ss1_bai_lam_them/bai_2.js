import {person} from "./person.js";

const {firstName, gender, education: {degree}, languages} = person;
const student = {
    firstName, gender, degree, English: languages[0]
};
console.log("Thông tin: ", student);

