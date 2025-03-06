import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NameCounterContext } from "../context/CounterContext";

function Register() {
  const { state, dispatch}=useContext(NameCounterContext)
  console.log(state,"state use from the register");
  const router = useNavigate();
  return (
    <div>
      <h1 className="head">Register</h1>
      <button className="button" onClick={() => router("/login")}>Login</button>
      <button className="button" onClick={() => router("/")}>Home</button>
    </div>
  );
}

export default Register;