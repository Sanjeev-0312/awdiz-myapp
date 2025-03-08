import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../redux/slice/counterSlice";
import { toggleTheme } from "../../redux/slice/themeSlice";

const ReduxCounter = () => {
  const count = useSelector((state) => state.counter.value);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        background: darkMode ? "#333" : "#fff",
        width: "100%",
        height: "100%",
      }}
    >
      <div>
        <h1 style={{
          color: darkMode ? "white":"black",
        }}>Counter:</h1>
        <h3 style={{  color: darkMode ? "white":"black", fontSize: "25px" }}>{count}</h3>
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
          
        </div>
        <button className="btn" onClick={() => dispatch(toggleTheme())}>
        {darkMode ? ' Light Mode' : ' Dark Mode'}
      </button>
        {/* <button
          className="btn"
          onClick={() => dispatch(toggleTheme())}
        >
          {darkMode ? "Light Theme" : "Dark Theme"}
        </button> */}
        <div style={{ 
      background: darkMode ? '#333' : '#fff', 
      color: darkMode ? '#fff' : '#000', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      
    </div>
      </div>
    </div>
  );
};

export default ReduxCounter;
