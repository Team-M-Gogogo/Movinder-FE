import React, { useState } from "react";
import { Select, Row, Col, Form, Input, Button } from "antd";
import { updateUserInfo } from "../api/movies";
import getUser from "../utils/getUser";

const { Option } = Select;

export default function UserProfile() {
  const [user, setuser] = useState(getUser());

  const [fields, setFields] = useState([
    {
      name: ["username"],
      value: user.customerName,
    },
    {
      name: ["password"],
      value: user.password,
    },
    {
      name: ["status"],
      value: user.status === "Available" ? "single" : "occupied",
    },
  ]);

  if (user === "") {
    return <div>User info not found</div>;
  }

  function updateLocalUser(formData) {
    let user = getUser();
    user.customerName = formData[0].value;
    user.password = formData[1].value;
    user.status = formData[2].value;

    updateUserInfo(user).then((response) => {
      localStorage.setItem("User", JSON.stringify(response.data));
      setuser(response.data);
      window.location.reload(false);
    });
  }

  return (
    <Col justify="center" align="middle">
      <Row justify="center" align="middle">
        <h1 style={{ margin: "10px" }}>User Profile</h1>
      </Row>
      <Row justify="center" align="middle">
        <CustomizedForm
          fields={fields}
          onChange={(newFields) => {
            setFields(newFields);
          }}
          updateLocalUser={updateLocalUser}
        />
      </Row>
    </Col>
  );
}

const CustomizedForm = ({ onChange, fields, updateLocalUser }) => (
  <Form
    name="global_state"
    fields={fields}
    onFieldsChange={(_, allFields) => {
      onChange(allFields);
    }}
    style={{ width: "300px" }}
  >
    <Form.Item
      name="username"
      label="Username"
      rules={[
        {
          required: true,
          message: "Username is required!",
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name="password"
      label="Password"
      rules={[
        {
          required: true,
          message: "Password is required!",
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item
      name="status"
      label="Status"
      rules={[
        {
          required: true,
          message: "Password is required!",
        },
      ]}
    >
      <Select placeholder="Select a option and change input text above">
        <Option value="single">Single</Option>
        <Option value="occupied">Occupied</Option>
      </Select>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button
        className="movinderBtn"
        type="primary"
        onClick={() => updateLocalUser(fields)}
        style={{ width: "200px" }}
      >
        Update
      </Button>
    </Form.Item>
  </Form>
);
