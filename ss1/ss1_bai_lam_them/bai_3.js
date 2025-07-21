import {sv1, sv2} from "./sv.js";

const showInfo = (user = {}) => {
    const {
        firstName = "Quân",
        degree = "NA"
    } = user;

    console.log("First Name", firstName);
    console.log("Degree", degree);
}
showInfo(sv1);
showInfo(sv2);
