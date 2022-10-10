import { Button, Card, Col, Form, Input, message, Row } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { login } from "../utils/api";

export default function Login() {
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const handleSubmit = async (values) => {
    message.loading({ content: "signing in", key: "login" });
    const res = await login(values);
    storeToken(JSON.parse(res.data).token);
    await authenticateUser();
    message.success({ content: "signed in", key: "login" });
    navigate("/");
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100%" }}>
      <Col>
        <Card title="Sign In">
          <Form onFinish={handleSubmit}>
            <Form.Item
              label="email"
              name="email"
              rules={[{ required: true, message: "please input a email" }]}
            >
              <Input type="email" />
            </Form.Item>
            <Form.Item
              label="password"
              name="password"
              rules={[{ required: true, message: "please input a password" }]}
            >
              <Input type="password" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}