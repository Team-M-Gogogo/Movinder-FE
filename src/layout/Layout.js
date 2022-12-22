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
      <div style={{ background: "#f5f5f5" }}>
      <Outlet />
      <div style={{ background: "#f5f5f5", height:"60px"}}></div>
      <Footer style={{ textAlign: "center", height: "30px", margin:"20px"}}>
                Team M Gogogo@2022 No time to die
      </Footer>
      </div>
    </div>
  );
}
