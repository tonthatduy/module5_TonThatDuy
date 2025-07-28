import './App.css';
import ListComponent from "./component/ListComponent";
import {Route, Routes} from "react-router-dom";
import AddComponent from "./component/AddComponent";
import DetailComponent from "./component/DetailComponent";
import UpdateComponent from "./component/UpdateComponent";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<ListComponent/>}/>
                <Route path='/add' element={<AddComponent/>}/>
                <Route path='/detail/:id' element={<DetailComponent/>}/>
                <Route path='/update/:id' element={<UpdateComponent/>}/>
            </Routes>
        </>
    );
}

export default App;
