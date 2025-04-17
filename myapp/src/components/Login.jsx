import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const router = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        {
          userData: {
            email: userData.email,
            password: userData.password,
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setUserData({ email: "", password: "" });
        router("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      {/* Toast notifications in this component only */}
      <Toaster position="top-right" reverseOrder={false} />

      <h1 className="head">Login</h1>

      <button className="button" onClick={() => router("/register1")}>
        Register
      </button>

      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <br />
        <input className="input"
          value={userData.email}
          onChange={handleChange}
          required
          type="email"
          name="email"
        />
        <br />
        <label>Password:</label>
        <br />
        <input className="input"
          value={userData.password}
          onChange={handleChange}
          required
          type="password"
          name="password"
        />
        <br />
        <br />
        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  );
}




export default Login;
