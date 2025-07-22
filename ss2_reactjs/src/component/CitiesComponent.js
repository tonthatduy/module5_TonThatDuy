function CitiesComponent() {
    const cities = ["Hà Nội", "Đà Nẵng", "Hải Phòng", "Hồ Chí Minh", "Cần Thơ"];
    return (
        <div>
            <h1>Các Thành Phố Trực Thuộc Trung Ương</h1>
            <ul>
                {cities.map((city, index) =>
                    (<li key={index}>{city}</li>))}
            </ul>
        </div>
    )
}

export default CitiesComponent;