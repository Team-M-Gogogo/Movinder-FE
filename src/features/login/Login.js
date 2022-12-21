import React from "react";
import "./Login.css";
import { useState } from "react";
import { postLogin } from "../../api/movies";
import { Button, Modal } from "antd";

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const onUsernameChange = (event) => {
    setUserName(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const success = () => {
    Modal.success({
      content: "Successfully Login.",
    });
  };

  const warning = () => {
    Modal.warning({
      title: "Fail to login",
      content: "Invalid username or password.",
    });
  };
 
  const onAdd = () => {
    const loginInfo = { username: username, password: password };
    postLogin(loginInfo)
      .then((response) => {
        localStorage.setItem('User',  JSON.stringify(response.data))
        console.log( localStorage.getItem('User'));
        success();
      })
      .catch((error) => {
        console.error(error);
        warning();
      });

    setUserName("");
    setPassword("");
  };

  return (
    <div className="login-wrapper">
      <h1>Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input
            type="text"
            value={username || ""}
            onChange={onUsernameChange}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password || ""}
            onChange={onPasswordChange}
          />
        </label>
        <div>
          <Button size="large" onClick={onAdd}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
