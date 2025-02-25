import { useNavigate } from "react-router-dom";

function Home() {
  const router = useNavigate();
  return (
    <div>
      <h1 className="head">Home</h1>
      <button className="button" onClick={() => router("/login")}>Login</button>
      <button className="button" onClick={() => router("/register")}>Register</button>
      <button className="button" onClick={() => router("/usestate")}>Use State</button>
      <button className="button" onClick={() => router("/useeffects")}>Use Effects</button>
      <button className="button" onClick={()=>router("/useparams")}>Use Params</button>
      <button className="button" onClick={()=>router("/paramsproduct")}>ParamsProduct</button>
      <button className="button" onClick={()=>router("/props")}>Props</button>
      <button className="button" onClick={()=>router("/todo")}>Todo</button>

    </div>
  );
}

export default Home;