import axios from "axios";

let studentList = [
    {
        id: "1",
        name: "Duy",
        gender: true,
        subject: ["Js", "Java"],
        classCG: {
            id: "2",
            name: "C03"
        }
    },
    {
        id: "2",
        name: "Duyy",
        gender: true,
        subject: ["Js", "Java"],
        classCG: {
            id: "4",
            name: "C05"
        }
    },
    {
        id: "3",
        name: "Duyyy",
        gender: true,
        subject: ["Js", "Java"],
        classCG: {
            id: "2",
            name: "C03"
        }
    },
    {
        id: "4",
        name: "Duyyyy",
        gender: true,
        subject: ["Js", "Java"],
        classCG: {
            id: "1",
            name: "C02"
        }
    },
    {
        id: "5",
        name: "Duyyyyy",
        gender: true,
        subject: ["Js", "Java"],
        classCG: {
            id: "3",
            name: "C06"
        }
    }
]
const getAll = async () => {
    try {
        const resp = await axios.get("http://localhost:3001/students");
        return resp.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
const addNew = async (student) => {
    try {
        await axios.post("http://localhost:3001/students", student);
    } catch (error) {
        console.log(error);
    }
}
const deleteById = async (id) => {
    try {
        await axios.delete("http://localhost:3001/students/" + id);
    } catch (error) {
        console.log(error)
    }
}
const findById = async (id) => {
    try {
        const resp = await axios.get("http://localhost:3001/students/" + id);
        return resp.data;
    } catch (error) {
        console.log(error);
        return {};
    }
}
const update = async (student) => {
    try {
        await axios.put("http://localhost:3001/students/" + student.id, student);
    } catch (error) {
        console.log(error);
    }
}
export {getAll, addNew, deleteById, findById, update};