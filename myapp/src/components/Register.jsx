import { useNavigate } from "react-router-dom";

function Register() {
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