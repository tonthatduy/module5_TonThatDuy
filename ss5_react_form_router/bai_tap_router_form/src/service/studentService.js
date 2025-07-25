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
const getAll = () => {
    return studentList;
}
const addNew = (student) => {
    studentList.push(student);
}
const deleteById = (id) => {
    studentList = studentList.filter(s => s.id !== id);
}
const findById = (id) => {
    return studentList.find(e => id === e.id)
}
export {getAll, addNew, deleteById, findById};