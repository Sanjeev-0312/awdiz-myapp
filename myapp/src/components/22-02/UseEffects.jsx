import { useEffect, useState } from "react";

 function UseEffects(){
    const[counter, setCounter] = useState(0);
    const[counter2, setCounter2] = useState(1000);

    useEffect(() => {
        console.log("Inside useEffect.");
    }, [counter, counter2]);

    return(
        <>
         <h1 className="rough">Counter {counter}</h1>         
      <button className="btn" onClick={() => setCounter(counter + 1)}>+</button>
      
      <h1 className="rough">Counter 2 {counter2}</h1>
      <button className="btn"  onClick={() => setCounter2(counter2 + 1)}>+ for counter 2</button>
        </>
    );
 }
 export default UseEffects;