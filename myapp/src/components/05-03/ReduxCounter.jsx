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
        <div > 
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
        </div>
        <div style={{ 
      background: darkMode ? '#333' : '#fff', 
      color: darkMode ? '#fff' : '#000', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <button onClick={() => dispatch(toggleTheme())}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
      </div>
    </div>
  );
};

export default ReduxCounter;
