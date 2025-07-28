import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {findById, update} from "../service/studentService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import {getClassAll} from "../service/classService";

const UpdateComponent = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [student, setStudent] = useState(undefined);
    const [classList, setClassList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await findById(id);
            const classList = await getClassAll();
            setStudent(result);
            setClassList(classList);
        };
        fetchData().then(r => console.log("Lỗi:", r));
    }, []);
    const handleUpdate = async (value) => {
        value = {
            ...value,
            classCG: JSON.parse(value.classCG)
        };
        await update(value);
        navigate("/");
        toast.success("Update Thành công");
    }
    return <>
        {student && (
            <Formik initialValues={student} onSubmit={handleUpdate}>
                <Form>
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
            </Formik>)}
    </>
}
export default UpdateComponent;