import React from 'react'
import { useState } from "react";
import { Button, Modal} from "antd";

export default function Logout() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const localUser = localStorage.getItem("User");
    const user = localUser === (null||"") ? "" : JSON.parse(localStorage.getItem("User"));
    const success = () => {
        Modal.success({
          content: 'Logout successfully.',
        });
      };    
    
      const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        localStorage.setItem('User', "")
        setIsModalOpen(false);
        success();
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    

  return (
    <div className="login-wrapper">
    <h1>Logout</h1>
      <div>
        <Button size="large" onClick={showModal}>
         Logout
        </Button>
    <Modal title="Logout Message" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    <p>Hi {user === "" ? "" : user.customerName}, Are you sure to logout? </p>
      </Modal>
      </div>
  </div>
  )
}
