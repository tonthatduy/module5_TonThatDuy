import {useCallback, useEffect, useState} from "react";
import {getAll} from "../service/studentService";
import {Link} from "react-router-dom";
import DeleteComponent from "./DeleteComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import {useDispatch, useSelector} from "react-redux";
import {logoutAction1} from "../redux/action/action";

const ListComponent = () => {
    const account1 = useSelector(state => state.login);
    const dispatch = useDispatch()
    const [studentList, setStudentList] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({id: "", name: ""});
    useEffect(() => {
        const fetchData = async () => {
            const result = await getAll();
            setStudentList(result);
        }
        fetchData().then(r => console.log("Lỗi: ", r));
    }, [isShowModal]);
    const handleShowModal = (student) => {
        setIsShowModal(pre => !pre);
        setDeleteStudent(student)
    }
    const handleCloseModal = useCallback(() => {
        setIsShowModal(pre => !pre);
    }, []);

    const handelLogout = () => {
        dispatch(logoutAction1());
    }
    return <>
        <h2>Quản lí Danh sách học sinh</h2>
            <Link to={"/add"}>Add </Link>
        <div>
            {!account1 && <Link to={"/login"}>Login</Link>}
            <a className="nav-link text-danger ">{account1?.username}</a>
            {account1 && <button onClick={handelLogout} className="btn btn-link ">Logout</button>}
        </div>
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
                    <td>
                        <Link to={`/update/${s.id}`}>Update</Link>
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