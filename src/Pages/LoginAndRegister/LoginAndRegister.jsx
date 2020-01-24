import React from "react";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";
import "./LoginAndRegister.scss";

const LoginAndRegister = () => {
  return (
    <div className="login-and-register">
      <Login />
      <SignUp />
    </div>
  );
};

export default LoginAndRegister;
