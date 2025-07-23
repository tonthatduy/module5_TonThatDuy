let students = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        age: 30,
        address: "Hà Nội"
    },
    {
        id: 2,
        name: "Nguyễn Văn B",
        age: 25,
        address: "Đà Nẵng"
    }, {
        id: 3,
        name: "Nguyễn Văn C",
        age: 27,
        address: "Hồ Chí Minh"
    },
]
let nextId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;

export function getAll() {
    return [...students];
}

export function addStudent(student) {
    const newStudent = {
        ...student,
        id: nextId++
    };
    students.push(newStudent);
}

export function deleteStudent(id) {
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) students.splice(index, 1);
}

export function updateStudent(update) {
    const index = students.findIndex(s => s.id === update.id);
    if (index !== -1) students[index] = update;
}
