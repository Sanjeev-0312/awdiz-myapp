import{useState} from "react";

function UseState() {
    const [count, setCount] = useState(0);
//   const [userLoggedIn, setUserLoggedIn] = useState();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseState;