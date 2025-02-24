import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import UseState from "./components/22-02/UseState";
import UseEffects from "./components/22-02/UseEffects";
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
      </Routes>
    </div>
  );
}

export default App;