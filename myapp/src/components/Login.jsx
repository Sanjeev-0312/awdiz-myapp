import { useNavigate } from "react-router-dom";


function Login() {
  const router = useNavigate();
  return (
    <div>
      <h1 className="head">Login</h1>
      <button className="button" onClick={() => router("/register")}>Register</button>
      <button className="button" onClick={() => router("/")}>Home</button>
      <button className="button" onClick={() => router("/allproducts")}>All Products</button>
    </div>
  );
}

export default Login;