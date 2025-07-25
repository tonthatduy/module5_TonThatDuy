import {useEffect, useState} from "react";
import {addNew, getAll} from "../service/studentService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {getClassAll} from "../service/classService";
import * as Yup from "yup";

const AddComponent = () => {
    const navigate = useNavigate();
    const [student, setStudent] = useState(
        {
            id: "",
            name: "",
            gender: false,
            subject: [],
            classCG: {
                id: "",
                name: ""
            }
        });
    const [classList, setClassList] = useState([]);
    useEffect(() => {
        setClassList(getClassAll)
    }, []);
    const handleAdd = (value) => {
        value = {
            ...value,
            classCG: JSON.parse(value.classCG)
        }
        addNew(value);
        navigate("/");
        toast.success("Thêm Mới Thành Công");
    };
    const handleValidate = Yup.object({
        id: Yup.string().required("Yêu cầu không được để trống"),
        name:Yup.string().required("Không được để trống")
            .matches(/^[A-Z]\w+$/),
        classCG:Yup.string().required("Không được để trống")
    });

    return <>
        <Formik initialValues={student} onSubmit={handleAdd} validationSchema={handleValidate}>
            <Form>
                <div>
                    <label>ID</label>
                    <Field type="text" name="id"/>
                    <ErrorMessage name="id" component={"div"} style={{color: "red"}}/>
                </div>
                <div>
                    <label>Name</label>
                    <Field type="text" name="name"/>
                    <ErrorMessage name="name" component={"div"} style={{color: "red"}}/>
                </div>
                <div>
                    <label>Gender</label>
                    <Field checked type="radio" name="gender" value="true"/>Male
                    <Field type="radio" name="gender" value="false"/>Female
                    <ErrorMessage name="gender" component={"div"} style={{color: "red"}}/>
                </div>
                <div>
                    <label>Subject</label>
                    <Field checked type="checkbox" name="subject" value="JS"/> JS
                    <Field type="checkbox" name="subject" value="Java"/> Java
                    <Field type="checkbox" name="subject" value="SQL"/> SQL
                    <ErrorMessage name="subject" component={"div"} style={{color: "red"}}/>
                </div>
                <div>
                    <label>Class Name</label>
                    <Field as="select" name="classCG">
                        <option value="">----Select Option-----</option>
                        {classList.map(cls =>
                            <option key={cls.id} value={JSON.stringify(cls)}>
                                {cls.name}
                            </option>)}
                    </Field>
                </div>
                <button type={"submit"}>Save</button>
            </Form>
        </Formik>
    </>
}
export default AddComponent;