import React from "react";
import Input from "./Input";

function Login() {
  return (
    <form className="form">
      <Input placeholder="Password" type="password"></Input>
      <Input placeholder="Username" type="text"></Input>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
