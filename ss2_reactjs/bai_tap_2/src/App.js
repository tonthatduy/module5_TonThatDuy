import './App.css';
import './css/table.css';
import StudentList from "./component/StudentList";
import {students} from "./service/student";

function App() {
    return (<div>
        {/*cách xài props*/}
        <StudentList students={students}/>;
    </div>)
}

export default App;
