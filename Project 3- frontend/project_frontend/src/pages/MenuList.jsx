import { Row, Col, message } from "antd";
import { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";
import Spinner from "../components/Spinner";
import { getMenus, deleteMenu } from "../utils/api";

export default function MenuList() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeMenu = (id) => {
    message.loading({
      content: "deleting menu...",
      key: "del",
    });
    deleteMenu(id).then(() => {
      const old = menus;

      setMenus(old.filter((e) => e._id !== id));
      message.success({
        content: "menu deleted",
        key: "del",
      });
    });
  };

  useEffect(() => {
    getMenus().then((res) => {
      setMenus(JSON.parse(res.data));
      setLoading(false);
    });
  }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      <Row gutter={4}>
        {menus.map((e) => (
          <Col key={e._id} span={4}>
            <MenuCard
              menu={e}
              handleDeleteConfirm={() => removeMenu(e._id)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}