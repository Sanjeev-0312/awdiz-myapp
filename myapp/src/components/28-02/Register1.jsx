import axios from "axios";
import { useState } from "react";
import React from "react-router-dom";  //i can use here from useNavigate 

function Register1() {
  // const router = useNavigate();

  const [allUsers, setAllUsers] = useState([]);
  console.log(allUsers, "allUsers  ");

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(userData, "userData");

  const handleChange = (event) => {
    // console.log(event.target.value, "value", event.target.name, "name");
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

     try{

    if (
      userData.name &&
      userData.email &&
      userData.password &&
      userData.confirmPassword
    ) {
      if (userData.password === userData.confirmPassword) {

        const response = await axios.post(
          "http://localhost:8000/api/v1/auth/register",
          {
            userData,
          }
        );  
        console.log(response,"response from registration api");
        
        setAllUsers([...allUsers, userData]);
        setUserData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        alert("Password not amtched.");
      }
    } else {
      alert("All fields are required.");
    } 
    }catch(error){
      console.log(error,"error while submiting register.");
    }
  };

  return (
    <div className="awdiz">
      <h1>Register</h1>
      <h1>Users Page</h1>
      {/* <button  onClick={() => router("/login")}>Login</button>
      <button onClick={() => router("/")}>Home</button> */}

      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <br />
        <input
          type="text"
          value={userData.name}
          onChange={handleChange}
          name="name"
        />
        <br />
        <label>Email : </label>
        <br />
        <input
          type="email"
          value={userData.email}
          onChange={handleChange}
          name="email"
        />
        <br />
        <label>Password : </label>
        <br />
        <input
          type="password"
          value={userData.password}
          onChange={handleChange}
          name="password"
        />
        <br />
        <label>Confirm Password : </label>
        <br />
        <input
          type="password"
          value={userData.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />
        <br />
          <button className="new">Submit</button>
        <br />
      </form>

      <h1 className="table">All Users</h1>
      {/* {user.email }
      {allUsers.map((user, i) => (
        <div className="table" key="i">
          <li>{i + 1}</li>
          <ol>
          <h2>Name : {user.name}</h2>
          <h3>Email : {user.email}</h3>
          </ol>
        </div>
      ))} */}
    </div>
  );
}

export default Register1;
