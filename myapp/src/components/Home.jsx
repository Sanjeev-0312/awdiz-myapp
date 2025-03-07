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
      <button className="button" onClick={()=>router("/register1")}>Register1</button>
      <button className="button" onClick={()=>router("/use-call-back")}>UseCallback</button>
      <button className="button" onClick={()=>router("/useref")}>UseRef</button>
      <button className="button" onClick={()=>router("/usereducer")}>UseReducer</button>
      <button className="button" onClick={()=>router("/context-counter")}>ContextCounter</button>
      <button className="button" onClick={()=>router("/redux-counter")}>ReduxCounter</button>



    </div>
  );
}

export default Home;