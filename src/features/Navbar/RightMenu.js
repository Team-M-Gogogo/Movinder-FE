import React from 'react';
import { Menu} from 'antd';
import setting from './image/setting.png'
import logout from './image/Logout.png'
import User from './image/user.png'





const RightMenu = () => {
  const localUser = localStorage.getItem("User");
  const user = localUser === "" ? "" : JSON.parse(localStorage.getItem("User"));
  
  return (
    <Menu mode="horizontal">
      <Menu.Item >
        <a href="/"><img src={setting} style={{ width: "20%" }} alt="Logo" />Home</a>
      </Menu.Item>

      {user === "" ? "" : 
      <Menu.Item >
        <a href="/userprofile"><img src={User} style={{ width: "20%" }} alt="Logo" />User</a>
      </Menu.Item>}
      

      <Menu.Item >
        <a href="/login"><img src={logout} style={{ width: "20%" }} alt="Logo" />
        {user === "" ? "Login" : 
        user.customerName}</a>
      </Menu.Item>

    </Menu>
  );
}

export default RightMenu;
