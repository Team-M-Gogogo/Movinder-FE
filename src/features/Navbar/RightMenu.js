import React from "react";
import { Menu } from "antd";
import setting from "./image/setting.png";
import User from "./image/user.png";
import { useState } from "react";
import { Modal, Button } from "antd";
import { postLogin } from "../../api/movies";
import { useNavigate, useLocation } from "react-router-dom";
import getUser from "../../utils/getUser";

const RightMenu = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = getUser();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    user === "" ? login() : logout();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    if (user === "" ){
      setUserName("");
      setPassword("");
    }
    setIsModalOpen(false);
  };

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

  const success_logout = () => {
    Modal.success({
      content: "Successfully Logout.",
    });
  };

  const warning = () => {
    Modal.warning({
      title: "Fail to login",
      content: "Invalid username or password.",
    });
  };

  const logout = () => {
    localStorage.setItem("User", "");
    navigate("/");
    success_logout();
  };
  const location = useLocation();
  console.log("ff", location);

  const login = () => {
    const loginInfo = { username: username, password: password };
    postLogin(loginInfo)
      .then((response) => {
        localStorage.setItem("User", JSON.stringify(response.data));
        console.log(localStorage.getItem("User"));
        success();
        navigate(location.pathname);
      })
      .catch((error) => {
        console.error(error);
        warning();
      });

    setUserName("");
    setPassword("");
  };

  const loginNav = (<><Button onClick={showModal}>
    {user === "" ? "Login" : "Logout"}
  </Button>

  <Modal
    title=""
    open={isModalOpen}
    onOk={handleOk}
    onCancel={handleCancel}
  >
    {user === "" ? (
      <div className="login-wrapper">
        <h1>Log In</h1>
        <label>
          <p>Username</p>
          <input
            type="text"
            value={username || ""}
            onChange={onUsernameChange}
          />
        </label>
        <br />
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password || ""}
            onChange={onPasswordChange}
          />
        </label>
      </div>
    ) : (
      <h1>
        Hi {user === "" ? "" : user.customerName}, Are you sure to logout?{" "}
      </h1>
    )}
  </Modal></>)

  const items=[
    {
      label: <a href="/"><img src={setting} style={{ width: "20%" }} alt="Logo" />Home</a>,
      key: 'Home',
    },
    {
      label: ( user && <a href="/userprofile"><img src={User} style={{ width: "20%" }} alt="Logo" />{user === "" ? "" : user.customerName}</a>),
      key: 'User',
    },
    {
      label: loginNav,
      key: 'login',
    },

  ] 



  return (
    <Menu mode="horizontal" items={items}/>  
  );
};

export default RightMenu;
