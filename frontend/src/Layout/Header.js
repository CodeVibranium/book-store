import { Col, Row, Typography } from "antd";
import React from "react";
import Logo from "../assets/books.svg";
import "./Layout.css";
function Header() {
  return (
    <Row>
      <Col span={22} offset={1} className="header">
        <img
          src={Logo}
          alt="Company logo"
          height={50}
          style={{
            objectFit: "cover",
            marginRight: "1rem",
          }}
        />
        <Typography.Title>Book Store</Typography.Title>
      </Col>
    </Row>
  );
}

export default Header;
