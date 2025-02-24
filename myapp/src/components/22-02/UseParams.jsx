import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UseParams() {
  const router = useNavigate();
  const [numbers ] = useState([]);
  console.log(numbers, "numbers");

  return (
    <div>
      <h1 >UseParams</h1>
      {numbers.map((number) => (
        <button className="btn" onClick={() => router(`/paramsproduct/${number}`)}>
          {number}
        </button>
      ))}
      <>
       <button className="btn" onClick={() => router("/paramsproduct/1")}>Product Page: 1</button>
      <button className="btn" onClick={() => router("/paramsproduct/2")}>Product Page: 2</button>
      <button className="btn" onClick={() => router("/paramsproduct/3")}>Product Page: 3</button>
      <button className="btn" onClick={() => router("/paramsproduct/4")}>Product Page: 4</button>
      <button className="btn" onClick={() => router("/paramsproduct/5")}>Product Page: 5</button>
      <button className="btn" onClick={() => router("/paramsproduct/6")}>Product Page: 6</button> 
    </>
    </div>
  );
}
export default UseParams;