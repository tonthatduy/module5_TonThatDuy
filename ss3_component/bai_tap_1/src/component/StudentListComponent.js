import {Component} from "react";
import {addStudent, deleteStudent, getAll, updateStudent} from "../service/student";

class StudentListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            form: {
                id: null,
                name: "",
                age: "",
                address: ""
            },
            isEditing: false,
            isValid: false,
        };
    }

    componentDidMount() {
        console.log("DisMount Run")
        this.setState(
            {
                students: getAll()
            }
        );
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            form: {...this.state.form, [name]: value}
        }, this.checkInvalidForm)
    };
    handleUpdate = () => {
        updateStudent(this.state.form)
        this.setState({
            students: getAll(),
            form: {id: null, name: "", age: "", address: ""},
            isEditing: false,
            isValid: false
        });


    };
    handleAdd = () => {
        addStudent(this.state.form)
        this.setState({
            students: getAll(),
            form: {id: null, name: "", age: "", address: ""},
            isValid: false
        });
    };
    handleEdit = (student) => {
        this.setState({
            form: {...student},
            isEditing: true
        }, this.checkInvalidForm);

    };
    handleDelete = (id) => {
        deleteStudent(id);
        this.setState({
            students: getAll()
        });
    };
    checkInvalidForm = () => {
        const {name, age, address} = this.state.form;
        const isValid =
            name.trim() !== "" &&
            String(age).trim() !== "" &&
            address.trim() !== "" &&
            !isNaN(age) &&
            Number(age) > 0;

        this.setState({isValid});
    }


    render() {
        console.log("Render Run")
        const {name, age, address} = this.state.form;
        return (
            <div>
                <h2>Quản Lí Học Sinh</h2>
                <div>
                    <input name="name" placeholder="Nhập tên sinh viên" value={name}
                           onChange={this.handleChange}/>
                    <input name="age" placeholder="Nhập tuổi" value={age}
                           onChange={this.handleChange}/>
                    <input name="address" placeholder="Nhập địa chỉ sinh viên" value={address}
                           onChange={this.handleChange}/>
                    {this.state.isEditing ? (
                        <button onClick={() => this.handleUpdate()} disabled={!this.state.isValid}>Cập Nhập</button>
                    ) : (
                        <button onClick={() => this.handleAdd()} disabled={!this.state.isValid}>Thêm</button>
                    )}
                </div>

                <table border="1">
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
                    {this.state.students.map((student, index) =>
                        (<tr key={student.id}>
                                <td>{index + 1}</td>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                                <td>
                                    <button onClick={() => this.handleDelete(student.id)}>Xóa</button>
                                    <button onClick={() => this.handleEdit(student)}>Sửa</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentListComponent;