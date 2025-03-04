// import {useState} from "react";
// import { useNavigate } from "react-router-dom";
// function Register1(){
//     const router= useNavigate();
//     const[allUsers, setAllUsers]= useState([]);
//     console.log(allUsers, "allUsers");
//     cosnt [userData, setUsersData] = useState({
//         name: "",
//         email: "",
//         password:"",
//         confirmPassword:"",
//     });
//     console.log(userData,"userData");
//     const handleChange =(event) =>{
//         setUsersData({...userData, [event.target.name]: event.target.value});
//     };
//     const handleSubmit = async (event)=>{
//         event.preventDefault();
//         if(
//             userData.name &&
//             userData.email &&
//             userData.password &&
//             userData.confirmPassword 
//         ){
//             if(userData.password===userData.confirmPassword){
//                 setAllUsers([...allUsers,userData]);
//                 setUsersData({
//                     name:"",
//                     email:"",
//                     password:"",
//                     confirmPassword:"",
//                 });
//             }else{
//                 alert("Password not Matched.")
//             }
//         }else{
//             alert("All fields are required.");
//       };
     
//     }
//     return (
//         <div>
//             <h1>Register</h1>
//             <button onClick={() => router("/login")}>Login</button>
//             <button onClick={() => router("/")}>Home</button>

//             <form onSubmit={handleSubmit}>
//                 <label>Name:</label>
//                 <br />
//                 <input type="text" value={userData.name} onChange={handleChange} name="name" />

//                 <br />

//                 <label >Email: </label>
//                 <br />
//                 <input type="email" value={userData.email} onChange={handleChange} name="email"/>

//             <br />
           
//            <label>Password:</label>
//            <br />
//            <input type="password" value={userData.password} onChange={handleChange} name="password" />

//            <br />

//            <label>Confirm Password:</label>
//            <br />
//            <input type="password" value={userData.confirmPassword}
//            onChange={handleChange} name="confirmPassword" />
//            <br />
//            <input type="submit" />
//               <br />
//             </form>
//             <h1>All Users</h1>
//       {/* {user.email } */}
//       {allUsers.map((user, i) => (
//         <div>
//           <h1>{i + 1}</h1>
//           <h1>Name : {user.name}</h1>
//           <h3>Email : {user.email}</h3>
//         </div>
//       ))};
//     </div>
//        );
// }
// export default Register1;


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
    if (
      userData.name &&
      userData.email &&
      userData.password &&
      userData.confirmPassword
    ) {
      if (userData.password === userData.confirmPassword) {
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
      {/* {user.email } */}
      {allUsers.map((user, i) => (
        <div className="table">
          <li>{i + 1}</li>
          <ol>
          <h2>Name : {user.name}</h2>
          <h3>Email : {user.email}</h3>
          </ol>
        </div>
      ))}
    </div>
  );
}

export default Register1;
