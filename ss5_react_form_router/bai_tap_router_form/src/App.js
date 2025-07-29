import './App.css';
import ListComponent from "./component/ListComponent";
import {Route, Routes} from "react-router-dom";
import AddComponent from "./component/AddComponent";
import DetailComponent from "./component/DetailComponent";
import UpdateComponent from "./component/UpdateComponent";
import LoginComponent from "./component/LoginComponent";
import {Popover} from "react-bootstrap";
import {Provider} from "react-redux";
import {store} from "./redux/store/store";
import {ToastContainer} from "react-toastify";


function App() {
    return (
        <>
            <Provider store={store}>
            <Routes>
                <Route path='/' element={<ListComponent/>}/>
                <Route path='/add' element={<AddComponent/>}/>
                <Route path='/detail/:id' element={<DetailComponent/>}/>
                <Route path='/update/:id' element={<UpdateComponent/>}/>
                <Route path={'/login'} element={<LoginComponent/>}/>
            </Routes>
                <ToastContainer/>
            </Provider>
        </>
    );
}

export default App;
