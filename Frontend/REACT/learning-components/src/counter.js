import {useState} from 'react';

function Counter() {
    const [x,setX] = useState(10);
    const [count, setCount] = useState(10);
    const [text, setText] = useState("");
    }
    return (
        <div className="counter">
        <span id="CounterValue">X:{x}</span>  <br/>
        <span id="CounterValue">Count:{count}</span> <br/>
        <input type = "text" onChange = {(event)=> setText(event.target.value)}/><br/>
        <button onClick = {() => setX(x+1)}>click and update x</button><br/>
        <button onClick = {() => setCount(count+1)} >click and update count</button>
        </div>
    )


export default Counter;