import {useRef, useState} from "react";
import {addStudent} from "../service/student";

function AddComponent({setIsLoading}) {
    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const addressRef = useRef(null);
    const [isEditing, setIsEditing] = useState(false)
    const handleAdd = () => {
        let student = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            address: addressRef.current.value
        }
        addStudent(student);
        setIsLoading(pre => !pre);
        nameRef.current.value = "";
        ageRef.current.value = "";
        addressRef.current.value = "";
    };
    const handleUpdate = () => {
        setIsEditing(false);
    };
    return <>
        <div>
            <input className="form-control" ref={nameRef} placeholder="Nhập tên sinh viên"/>
            <input className="form-control" ref={ageRef} placeholder="Nhập tuổi"/>
            <input className="form-control" ref={addressRef} placeholder="Nhập địa chỉ sinh viên"/>
            {isEditing ? (
                <button className="btn btn-primary btn-sm me-2" onClick={handleUpdate}>Cập Nhập</button>
            ) : (
                <button className="btn btn-primary btn-sm me-2" onClick={handleAdd}>Thêm</button>
            )}
        </div>
    </>
}

export default AddComponent;