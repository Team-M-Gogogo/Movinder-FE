import React from 'react';
import { Menu} from 'antd';
import setting from './image/setting.png'
import logout from './image/Logout.png'
import User from './image/user.png'





const RightMenu = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item >
        <a href="/"><img src={setting} style={{ width: "20%" }} alt="Logo" />Setting</a>
      </Menu.Item>
      <Menu.Item >
        <a href="/"><img src={User} style={{ width: "20%" }} alt="Logo" />User</a>
      </Menu.Item>
      <Menu.Item >
        <a href="/login"><img src={logout} style={{ width: "20%" }} alt="Logo" />Login</a>
      </Menu.Item>

    </Menu>
  );
}

export default RightMenu;
