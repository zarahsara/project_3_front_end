import { Button, Card, Col, Form, Input, message, Row } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMenu, updateMenu } from "../utils/api";
import Spinner from "../components/Spinner";

export default function MenuUpdate() {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState(null);
  const navigate = useNavigate();
  const { menuId } = useParams();
  useEffect(() => {
    getMenu(menuId).then((res) => {
      setMenu(JSON.parse(res.data));
      setLoading(false);
    });
  }, [menuId]);

  const handleSubmit = (values) => {
    message.loading({ content: "updating menu", key: "creation" });
    updateMenu(menuId, values).then((res) => {
      const data = JSON.parse(res.data);
      message.success({
        content: "menu updated",
        key: "creation",
      });
      navigate(`/menus/${data._id}`);
    });
  };

  if (loading) return <Spinner/>;

  return (
    <Row justify="center" align="middle" style={{ height: "100%" }}>
    <Col>
    <Card title={`Update menu ${menu.title}`}>
         
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