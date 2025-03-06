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
  return (
    <div>
        <h1>Counter : {state.counter}</h1>
        <button className='btn' onClick={Increment}>+</button>
        <button className='btn' onClick={Decrement}>-</button>
        <button className='btn' onClick={Reset}>Reset</button>
    </div>
  )
}
export default ContextCounter;