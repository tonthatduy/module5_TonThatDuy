let studentList = [
    {
        id: 1,
        name: "Tôn Thất Duy",
        age: 18,
        address: "Huế",
    },
    {
        id: 2,
        name: "Tôn Thất Duyy",
        age: 18,
        address: "Huế",
    },
    {
        id: 3,
        name: "Tôn Thất Duyyy",
        age: 18,
        address: "Huế",
    },
    {
        id: 4,
        name: "Tôn Thất Duyyyy",
        age: 18,
        address: "Huế",
    },
]
let nextId = studentList.length > 0 ? Math.max(...studentList.map(s => s.id)) + 1 : 1;

export function getAll() {
    return [...studentList];
}

export function addStudent(student) {
    const newStudent = {
        ...student,
        id: nextId++
    }
    studentList.push(newStudent);
}

export const deleteById = (id) => {
    studentList = studentList.filter(s => s.id !== id);
}
