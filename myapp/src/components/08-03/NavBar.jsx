import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slice/userSlice";

const NavBar = () => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const tokenInRedux = useSelector((state) => state.user.token);
  return (
    <div
      style={{
        height: "70px",
        border: "1px solid black",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <h1 onClick={() => router("/")} style={{ cursor: "pointer" }}>
        Home
      </h1>
      <h1 onClick={() => router("/allproducts")} style={{ cursor: "pointer" }}>
        Products
      </h1>
      {!tokenInRedux ? (
        <h1 onClick={() => router("/fakelogin")} style={{ cursor: "pointer" }}>
          Login
        </h1>
      ) : (
        <h1 onClick={() => dispatch(logout())} style={{ cursor: "pointer" }}>
          Logout
        </h1>
      )}
    </div>
  );
};

export default NavBar;
