import {useEffect, useState} from "react";
import {getAll} from "../service/student";
import AddComponent from "./AddComponent";
import DeleteComponent from "./DeleteComponent";
import 'bootstrap/dist/css/bootstrap.css'

function ShowListFunction() {
    const [studentList, setStudentList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({name: "", age: "", address: ""});
    const [editStudent, setEditStudent] = useState(null);
    useEffect(() => {
        console.log("effect run")
        setStudentList([...getAll()])
    }, [isLoading, isShowModal]);

    const handleShowModal = (student) => {
        setIsShowModal(pre => !pre);
        setDeleteStudent(student);
    }
    const handleCloseModal = () => {
        setIsShowModal(pre => !pre);
    }
    const handleEdit = () => {

    }
    return <>
        {console.log("render run")}
        <div className="container">
            <h2>Quản Lí Học Sinh</h2>
            <AddComponent setIsLoading={setIsLoading}/>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {studentList && studentList.map((student, index) =>
                    (<tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td >{student.address}</td>
                            <td>
                                <button className="btn btn-danger btn-sm me-2" onClick={() => {
                                    handleShowModal(student)
                                }}>Delete
                                </button>
                                <button className="btn btn-warning btn-sm" onClick={() => {
                                    handleEdit(student)
                                }}>Edit
                                </button>

                            </td>
                            {/*<td>*/}
                            {/*</td>*/}
                        </tr>
                    ))}
                </tbody>
            </table>
            <DeleteComponent deleteStudent={deleteStudent} isShowModal={isShowModal}
                             handleCloseModal={handleCloseModal}/>
        </div>
    </>
}

export default ShowListFunction;