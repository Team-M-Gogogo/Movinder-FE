import React from 'react'
import { Modal } from "antd";

export const info = () => {
    Modal.info({
      title: 'Please login first before buying the ticket',
      content: (
        <div>
          <p>You can click the top right login button on the navigation bar to login.</p>
        </div>
      ),
      onOk() {},
    });
  };
