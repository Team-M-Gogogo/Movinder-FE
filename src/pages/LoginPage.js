import React from "react";
import Login from "../features/login/Login";
import Logout from "../features/login/Logout";

export default function LoginPage() {

  const user = localStorage.getItem('User');

  return user === "" ? <Login /> : <Logout />;

  
}
