
// truyền props như tham số
const StudentList = ({students}) => {
    return (
        <div>
            <h1>Students</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student, index) =>
                    (<tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.company}</td>
                            <td>{student.contact}</td>
                            <td>{student.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default StudentList;