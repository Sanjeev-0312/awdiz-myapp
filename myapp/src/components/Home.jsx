import { useNavigate } from "react-router-dom";

function Home() {
  const router = useNavigate();
  return (
    <div>
      <h1 className="head">Home</h1>
      <button className="button" onClick={() => router("/login")}>Login</button>
      <button className="button" onClick={() => router("/register")}>Register</button>
    </div>
  );
}

export default Home;