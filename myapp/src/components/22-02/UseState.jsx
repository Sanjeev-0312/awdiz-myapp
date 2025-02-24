import{useState} from "react";

function UseState() {
    const [userLoggedIn, setUserLoggedIn] = useState(true);
    const [counter,setCounter] =useState(0);
    console.log(counter ,"counter");
    function Increment(){
      setCounter((prevState) => prevState + 1);
    }
    function Decrement(){
      if(counter >0){
        setCounter((prevState) => prevState - 1);
      }
}
function Reset(){
  setCounter(0);
}
function extraLogin(){
  setUserLoggedIn(!userLoggedIn);
}
return(
  <div>
    {userLoggedIn ? (
      <div>
        <h1>Welcome.</h1>
        <button className="btn" onClick={extraLogin}>Click to Logout</button>
        </div>
    ) : (
         <div> 
          <h1>Login.</h1>
          <button className="btn" onClick={extraLogin}>Click to Login.</button>
          </div>
    )}
    <h1>Counter : {counter}</h1>
    <button className="btn" onClick={Increment}>+</button>
    <button className="btn" onClick={Decrement}>-</button>
    <button className="btn" onClick={Reset}>Reset</button>
  </div>
);
}

export default UseState;