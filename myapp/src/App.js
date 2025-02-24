import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import UseState from "./components/22-02/UseState";
import UseEffects from "./components/22-02/UseEffects";
import UseParams from  "./components/22-02/UseParams";
import ParamsProduct from "./components/22-02/ParamsProduct";
import { Routes, Route } from "react-router-dom";
function App() {
  console.log("Inside app");
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useeffects" element={<UseEffects />} />
        <Route path="/useparams"element={<UseParams />} />
        <Route path="/paramsproduct/:uniqueid"element={<ParamsProduct />} />

      </Routes>
    </div>
  );
}

export default App;