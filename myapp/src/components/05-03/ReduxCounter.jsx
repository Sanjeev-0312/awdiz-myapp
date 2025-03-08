import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment,reset,theme } from "../../redux/slice/counterSlice";

const ReduxCounter = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1>Counter:</h1>
      <h3 style={{color:"white",fontSize:"25px"}}>{count}</h3>
        <div> 
          <button
            className="btn"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
         
          <button
            className="btn"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>

          <button
            className="btn"
            aria-label="Reset value"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
          <h1>
            Theme Mode:</h1>
           
            <button
            className="btn"
            aria-label="Theme value"
            onClick={() => dispatch(theme())}
          >
            Theme
          </button>
          

        </div>
      </div>
    </div>
  );
};

export default ReduxCounter;
