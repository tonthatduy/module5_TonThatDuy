import {useState} from "react";

const CountComponent = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const handleIncrease = (increaseNum1, callback) => {
        callback((prev) => prev + increaseNum1);
    }
    return (<>
        <div>
            <h3>Counter 1:{count1}</h3>
            <button onClick={() => handleIncrease(1, setCount1)}> Tăng +1</button>
            <h3>Counter 5:{count2}</h3>
            <button onClick={() => handleIncrease(5, setCount2)}> Tăng +5</button>
        </div>
    </>
    );
};
export default CountComponent;