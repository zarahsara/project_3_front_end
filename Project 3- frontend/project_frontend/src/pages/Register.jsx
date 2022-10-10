import { Button, Card, Col, Form, Input, message, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/api";

export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    message.loading({ content: "registering account", key: "register" });
    await register(values);
    message.success({ content: "account registered", key: "register" });
    navigate("/login");
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100%" }}>
      <Col>
        <Card title="Sign Up">
          <Form onFinish={handleSubmit}>
            <Form.Item
              label="email"
              name="email"
              rules={[{ required: true, message: "please input a email" }]}
            >
              <Input type="email" />
            </Form.Item>
            <Form.Item
              label="name"
              name="name"
              rules={[{ required: true, message: "please input a name" }]}
            >
              <Input />
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