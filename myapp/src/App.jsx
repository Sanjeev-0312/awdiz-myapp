import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import UseState from "./components/22-02/UseState";
import UseEffects from "./components/22-02/UseEffects";
import UseParams from  "./components/22-02/UseParams";
import ParamsProduct from "./components/22-02/ParamsProduct";
import { Routes, Route, data } from "react-router-dom";
import Home from "./components/Home";
import Props from "./components/23-02/Props";
import {useEffect, useState } from "react";
import Todo from "./components/23-02/Todo";
import Register1 from "./components/28-02/Register1";
// import Todos from "./components/01-03/Todos";
import UseMemo from "./components/01-03/UseMemo";
import UseCallBack from "./components/01-03/UseCallBack";
import UseRef from "./components/02-03/UseRef";
import UseReducer from "./components/02-03/UseReducer";
// import { NameCounterContext } from "./context/CounterContext";
import ContextCounter from "./components/04-03/ContextCounter";
import ReduxCounter from './components/05-03/ReduxCounter'
import AllProducts from "./components/08-03/AllProducts";
import FakeLogin from "./components/08-03/FakeLogin";
import SingleProduct from "./components/08-03/SingleProduct";
import NavBar from "./components/08-03/NavBar";
import { login } from "./redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";


const socket = io("http://localhost:8000" , {
  withCredentials: true
});
  //https://awdiz-myapp-sanjeev-chauhans-projects.vercel.app/   {}
function App() {
  const dispatch = useDispatch();
  const tokenFromRedux = useSelector((state) => state.user.token);
  const [counter, setCounter]=useState(0);
  // const {state, dispatch}=useContext(NameCounterContext)
  // console.log(state, "state from the app", dispatch,"dispatch from the app" )

  // console.log("Inside app");
  useEffect(() => {
    const tokenFromLocalStorage = JSON.parse(localStorage.getItem("token"));
    if (tokenFromLocalStorage) {
      if (tokenFromRedux == null) {
        dispatch(login(tokenFromLocalStorage));
      }
    }
   

  }, []);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data, "received message");
    });
  
    return () => {
      socket.off("receive_message"); // Clean up listener on unmount
    };
  }, []);

  console.log("data",data)
  const sendMessage = () =>{
    socket.emit("send_message", {message: "Hello from frontend"});
  };
  return (
    <div className="nav"><NavBar/>
    <div className="App">
    <button onClick={sendMessage}>Socket check</button>
    
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useeffects" element={<UseEffects />} />
        <Route path="/useparams"element={<UseParams />} />
        <Route path="/paramsproduct/:uniqueid"element={<ParamsProduct />} />
        <Route path="/props" element={<Props counter={counter} setCounter={setCounter} />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/register1"element={<Register1/>}/>
        <Route path="/todo" element={<Todo />} />
      {/* <Route path="/todos" element={<Todos />} /> */}
      <Route path="/usememo" element={<UseMemo />} />
      <Route path="/use-call-back" element={<UseCallBack />} />
      <Route path="/useref" element={<UseRef />} />
      <Route path="/usereducer" element={<UseReducer />} />
      <Route path="/context-counter" element={<ContextCounter />} />
      <Route path="/redux-counter" element={<ReduxCounter />} />
      <Route path="/allproducts" element={<AllProducts />} />
      <Route path="/fakelogin" element={<FakeLogin />} />
      <Route path="/single-product/:id" element={<SingleProduct />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
