import { Col, Row } from "antd";
import React from "react";

function Body({ children }) {
  return (
    <Row>
      <Col span={22} offset={1}>
        {children}
      </Col>
    </Row>
  );
}

export default Body;
