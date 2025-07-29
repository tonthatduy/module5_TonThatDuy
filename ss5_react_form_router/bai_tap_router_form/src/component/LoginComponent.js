import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {loginAction1} from "../redux/action/action";
import {Field, Form, Formik} from "formik";

const LoginComponent = () => {
    const dispatch = useDispatch();
    const handleLogin =(value)=> {
        console.log("-----form login---------")
        console.log(value);
        dispatch(loginAction1(value)).then(status => {
            if (status) {
                toast("Đăng nhập thành công");
            } else {
                toast("đăng nhập thất bại");
            }
        });
    }
    return <>
        <h3>Login</h3>
        <Formik initialValues={{
            username:"",
            password:""
        }} onSubmit={handleLogin}>
            <Form>
                <Field type={'text'} name={'username'} placeholder={'username'}/>
                <Field type={'text'} name={'password'} placeholder={'username'}/>
                <button type={'submit'} >Login</button>
            </Form>
        </Formik>

    </>
}
export default LoginComponent;