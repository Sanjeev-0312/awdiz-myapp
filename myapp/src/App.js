import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import UseState from "./components/22-02/UseState";
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
      </Routes>
    </div>
  );
}

export default App;