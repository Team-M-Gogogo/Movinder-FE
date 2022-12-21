import React, { useState } from "react";
import { Select, Row, Col, Form, Input, Button } from "antd";
import { updateUserInfo } from "../api/movies";
const { Option } = Select;

function getUser() {
  const localUser = localStorage.getItem("User");
  const user =
    localUser === null || localUser === ""
      ? ""
      : JSON.parse(localStorage.getItem("User"));
  return user;
}

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
      value: user.status === "single" ? "single" : "occupied",
    },
  ]);

  if (user === "") {
    return <div>User info not found</div>;
  }

  function updateLocalUser(formData) {
    var user = getUser();
    user.customerName = formData[0].value;
    user.password = formData[1].value;
    user.status = formData[2].value;

    console.log(user);
    updateUserInfo(user).then((response) => {
      localStorage.setItem("User", JSON.stringify(response.data));
      setuser(response.data);
      window.location.reload(false);
    });
  }

  return (
    <Col justify="center" align="middle">
      <Row justify="center" align="middle">
        <h1>User Profile</h1>
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
  >
    <Form.Item // username
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
    <Form.Item // password
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
    <Form.Item //Status
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

    <Form.Item //button
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" onClick={() => updateLocalUser(fields)}>
        Update
      </Button>
    </Form.Item>
  </Form>
);
