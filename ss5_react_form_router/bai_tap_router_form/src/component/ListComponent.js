import {useCallback, useEffect, useState} from "react";
import {getAll} from "../service/studentService";
import {Link} from "react-router-dom";
import DeleteComponent from "./DeleteComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

const ListComponent = () => {
    const [studentList, setStudentList] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({id: "", name: ""});
    useEffect(() => {
        setStudentList([...getAll()])
    }, [isShowModal]);
    const handleShowModal = (student) => {
        setIsShowModal(pre => !pre);
        setDeleteStudent(student)
    }
    const handleCloseModal = useCallback(() => {
        setIsShowModal(pre => !pre);
    }, []);
    return <>
        <h2>Quản lí Danh sách học sinh</h2>
        <Link to={"/add"}>Add </Link>
        <table border="1">
            <thead>
            <tr>
                <th>STT</th>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Subject</th>
                <th>Class Name</th>
                <th>View</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {studentList.map((s, index) => (
                <tr key={s.id}>
                    <td>{index + 1}</td>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.gender ? "Male" : "Female"}</td>
                    <td>{s.subject}</td>
                    <td>{s.classCG?.name}</td>
                    <td>
                        <Link to={`/detail/${s.id}`}>Detail</Link>
                    </td>
                    <td>
                        <button onClick={() => handleShowModal(s)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        <DeleteComponent
            deleteStudent={deleteStudent}
            isShowModal={isShowModal}
            handleCloseModal={handleCloseModal}
        />
    </>
}
export default ListComponent;