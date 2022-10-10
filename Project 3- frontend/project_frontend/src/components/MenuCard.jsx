import { Button, Card, Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";

export default function MenuCard({ menu, handleDeleteConfirm }) {
  const navigate = useNavigate();

  return (
    <Card title={menu.title}>
      <p>{menu.description}</p>
      <p>{menu.category}</p>
      <p>{menu.price}</p>
      
      <Button onClick={() => navigate(`/menus/${menu._id}/edit`)}>
        Edit
      </Button>
      <Popconfirm
        title={`are you sure you want to delete menu ${menu.title}?`}
        okText="yes"
        cancelText="no"
        onConfirm={() => handleDeleteConfirm()}
        onCancel={() => {}}
      >
        <Button type="primary" danger>
          Delete
        </Button>
      </Popconfirm>
    </Card>
  );
}