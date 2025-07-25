import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {findById} from "../service/studentService";

const DetailComponent = () => {
    const [student, setStudent] = useState({
        id: "",
        name: "",
        gender: "",
        subject: [],
        classCG: {
            id: "",
            name: ""
        }
    })
    const {id} = useParams();
    useEffect(() => {
        setStudent(findById(id));
    }, []);
    return <>
        <h2>Detail</h2>
        <p>Id:{student.id}</p>
        <p>Name:{student.name}</p>
        <p>Gender:{student.gender}</p>
        <p>Subject:{student.subject}</p>
        <p>Class Name:  {student.classCG.name}</p>
    </>
}
export default DetailComponent;