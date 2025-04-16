import { useNavigate } from "react-router-dom";


function Login() {
  const router = useNavigate();
  return (
    <div>
      <h1 className="head">Login</h1>
      <button className="button" onClick={() => router("/register")}>Register</button>
      <form > 
        <label >
          Email : 
        </label>
        <br />
        <input type="email" />
        <br />
        <label>Password :</label>
        <br />
        <input type="password" />
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  );
}

export default Login;