import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const [userData, setUserData]= useState({email:"", password : ""});
  const router = useNavigate();
  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData)  
  }

  return (
    <div>
      <h1 className="head">Login</h1>
      <button className="button" onClick={() => router("/register")}>Register</button>
      <form > 
        <label onSubmit={handleSubmit}>
          Email : 
        </label>
        <br />
        <input onChange={handleChange} required type="email" name="email" />
        <br />
        <label>Password :</label>
        <br />
        <input onChange={handleChange} required type="password" name="password" />
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  );
}

export default Login;