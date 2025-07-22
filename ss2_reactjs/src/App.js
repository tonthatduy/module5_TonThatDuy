import logo from './logo.svg';
import './App.css';
import CitiesComponent from "./component/CitiesComponent";
import React from "react";

function App() {
    const cities = ["Hà Nội", "Đà Nẵng", "Hải Phòng", "Hồ Chí Minh", "Cần Thơ"];
    return React.createElement(
        'div', null,
        React.createElement('h1', null, 'Các Thành Phố Trực Thuộc Trung Ương'),
        React.createElement('ul', null, cities.map((city, index) =>
                React.createElement('li', {key: index}, city)
            )
        ),
        React.createElement(CitiesComponent) // các viết jsx thay bằng div và tên function
    );
    // return (<div>
    //     <CitiesComponent/>;
    // </div>)
}

export default App;
