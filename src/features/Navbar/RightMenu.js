import React from "react";
import { Menu } from "antd";
import logouts from "./image/Logout.png";
import User from "./image/user.png";
import { useState } from "react";
import { Modal, Input } from "antd";
import { postLogin } from "../../api/movies";
import { useNavigate, useLocation } from "react-router-dom";
import getUser from "../../utils/getUser";
import { useDispatch, useSelector } from "react-redux";
import { changeShowLogin } from "../movieSlice";

const RightMenu = () => {
  const navigate = useNavigate();
  const user = getUser();

  const dispatch = useDispatch();

  const isModalOpen = useSelector((state) => {
    return state.movie.showLogin;
  });

  const showModal = () => {
    dispatch(changeShowLogin(true));
  };

  const handleOk = () => {
    user === "" ? login() : logout();
    dispatch(changeShowLogin(false));
  };
  const handleCancel = () => {
    if (user === "") {
      setUserName("");
      setPassword("");
    }
    dispatch(changeShowLogin(false));
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

  const loginNav = (
    <>
      <span onClick={showModal}>
        <img
          src={user === "" ? User : logouts}
          style={{ width: "30%" }}
          alt="Logo"
        />
        {user === "" ? "Login" : "Logout"}
      </span>

      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width="600px"
      >
        {user === "" ? (
          <div className="login-wrapper">
            <h1>Log In</h1>
            <label>
              <p>Username</p>
              <Input
                type="text"
                value={username || ""}
                onChange={onUsernameChange}
              />
            </label>
            <br />
            <label>
              <p>Password</p>
              <Input
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
      </Modal>
    </>
  );

  var items = [];
  if (user) {
    items.push({
      label: user && (
        <a href="/userprofile">
          <img src={User} style={{ width: "30%" }} alt="Logo" />
          {user === "" ? "" : user.customerName}
        </a>
      ),
      key: "User",
    });
  }
  items.push({
    label: loginNav,
    key: "login",
  });

  return <Menu mode="horizontal" items={items} />;
};

export default RightMenu;
