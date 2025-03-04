import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import UseState from "./components/22-02/UseState";
import UseEffects from "./components/22-02/UseEffects";
import UseParams from  "./components/22-02/UseParams";
import ParamsProduct from "./components/22-02/ParamsProduct";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Props from "./components/23-02/Props";
import { useState } from "react";
import Todo from "./components/23-02/Todo";
import Register1 from "./components/28-02/Register1";
import Todos from "./components/01-03/Todos";
import UseMemo from "./components/01-03/UseMemo";
import UseCallBack from "./components/01-03/UseCallBack";
import UseRef from "./components/02-03/UseRef";
import UseRef from "./components/02-03/UseReducer";
function App() {
  const [counter, setCounter]=useState(0);
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
        <Route path="/props" element={<Props counter={counter} setCounter={setCounter} />} />
        <Route path="/register1"element={<Register1/>}/>

      <Route path="/todo" element={<Todo />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/usememo" element={<UseMemo />} />
      <Route path="/use-call-back" element={<UseCallBack />} />
      <Route path="/useref" element={<UseRef />} />
      <Route path="/usereducer" element={<UseReducer />} /
      </Routes>
    </div>
  );
}

export default App;
