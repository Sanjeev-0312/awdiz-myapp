import React from "react";
const Props =({counter, setCounter})=>{
    return (
        <button className="btn" onClick={() => setCounter(counter + 1)}>Counter- {counter}</button>
    );
};
export default Props;