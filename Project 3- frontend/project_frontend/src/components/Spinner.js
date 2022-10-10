import { Col, Row, Spin } from "antd";

export default function Spinner() {
  return (
    <Row justify="center" align="middle" style={{ height: "100%" }}>
      <Col>
        <Spin size="large" />
      </Col>
    </Row>
  );
}