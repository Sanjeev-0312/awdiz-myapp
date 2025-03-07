import React, { useContext } from 'react'
import { NameCounterContext } from '../../context/CounterContext';
 const ContextCounter = () => {
     const{state, dispatch} = useContext(NameCounterContext)

     function Increment(){
        dispatch({type : "INCREMENT_COUNTER"});

     }
     function Decrement(){
        dispatch({type : "DECREMENT_COUNTER"});

     }
     function Reset(){
        dispatch({type : "RESET_COUNTER"});

     }
     function ToggleTheme(){
      dispatch({ type: "TOGGLE_THEME" })

     }
  return (
   
    <div style={{
      background: state.theme === "light" ? "#fff" : "#333",
      color: state.theme === "light" ? "#000" : "#fff",
      padding: "20px",
      width:"100%",
      height:"100%",
      textAlign: "center",
    }}>
        <h1>Counter : {state.counter}</h1>
        <button className='btn' onClick={Increment}>+</button>
        <button className='btn' onClick={Decrement}>-</button>
        <button className='btn' onClick={Reset}>Reset</button>
        <h1> Display mode : {state.theme.toUpperCase()}</h1>
      <button  className='btn' onClick={ToggleTheme}>
           Mode 
      </button>
    </div>
  )
}
export default ContextCounter;