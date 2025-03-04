import React,{useRef, useState} from "react";

const UseRef = () => {
    const counter = useRef(0);
    const [stateCounter, setStateCounter] = useState(10);
    console.log(counter, "counter");
    function increment(){
        counter.current = counter.current+1;
        alert(counter.current);
    }
    return (
        <div>
            <h1>Counter:{counter.current}</h1>
            <button onClick={increment}className="button">+</button>
            <h1>State Counter:{stateCounter}</h1>
            <button onClick={() => setStateCounter(stateCounter + 1)}className="button">+</button>
        </div>
    );
};
export default UseRef;