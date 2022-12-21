import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../features/Navbar'
import "../features/Navbar/Navbar.css";
import { Layout as layout }  from "antd";

const { Footer } = layout;

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer style={{ textAlign: "center" }}>
                Team M Gogogo@2022 No time to die
      </Footer>
    </div>
  );
}
