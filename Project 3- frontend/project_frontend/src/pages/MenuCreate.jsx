import { Button, Card, Col, Form, Input, message, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { createMenu } from "../utils/api";




export default function Menucreate() {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    message.loading({ content: "creating menu", key: "creation" });
    createMenu(values).then((res) => {
      const data = JSON.parse(res.data);
      message.success({
        content: "menu created",
        key: "creation",
      });
      navigate(`/menus/${data._id}`);
    });
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100%" }}>
      <Col>
        <Card title="Create a new menu">
          <Form onFinish={handleSubmit}>
            <Form.Item
              label="title"
              name="title"
              rules={[{ required: true, message: "please input a title of the food menu" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="description"
              name="description"
              rules={[
                { required: true, message: "please input a description of the food recipes" },
              ]}
            >
             <Input/>
             </Form.Item>
             
            <Form.Item
              label="category"
              name="category"
              rules={[
                { required: true, message: "please input a category of the food " },
              ]}
            >
             <Input />
             </Form.Item>
             <Form.Item
              label="price"
              name="price"
              rules={[
                { required: true, message: "please input a price of the food " },
              ]}
            >
          <Input />
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