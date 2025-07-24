import './App.css';
import CountComponent from "./component/CountComponent";

function App() {
    // function useIncrement(addAmount) {
    //     const [count, setCount] = useState(0);
    //
    //     function increase() {
    //         setCount(prev => prev + addAmount);
    //     }
    //
    //     return [count, increase];
    // }
    //
    // function Counter1() {
    //     const [count, increase] = useIncrement(1);
    //     return (
    //         <div>
    //             <h3> Counter 1: {count}</h3>
    //             <button onClick={increase}> Tăng +1</button>
    //         </div>
    //     )
    // }
    //
    // function Counter2() {
    //     const [count, increase] = useIncrement(5);
    //     return (
    //         <div>
    //             <h3>Counter 5:{count}</h3>
    //             <button onClick={increase}> Tăng +5</button>
    //         </div>
    //     )
    // }

    return (
        <div>
            <h2>Demo Custom Hook useIncrement</h2>
            {/*<Counter1/>*/}
            {/*<Counter2/>*/}
            <CountComponent/>
        </div>
    );
}

export default App;
