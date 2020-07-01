import { useState, useContext } from "react";
import UserContext from "../components/UserContext";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const FormSignin = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const { signIn } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const authenticate = (e) => {
    let isemployee = false;
    let isadmin = false;
    e.preventDefault();
    if (username == "employee" && password == "employee") {
      signIn(username, password);
      isemployee = true;
    } else if (username == "admin" && password == "admin") {
      signIn(username, password);
      isadmin = true;
    } else if (username == "superadmin" && password == "superadmin") {
      signIn(username, password);
    } else {
      setMessage("Please enter your correct username and password");
    }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      style={{ marginTop: "10px", marginLeft: "40%" }}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
        style={{ width: "40%" }}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
        style={{ width: "40%" }}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          onClick={(e) => authenticate(e)}
        >
          Log in
        </Button>
      </Form.Item>
      {message != "" && <div className="message">{message}</div>}
    </Form>
  );
};

export default FormSignin;
