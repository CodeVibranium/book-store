import "./Layout.css";
import Body from "./Body";
import Header from "./Header";
import { Col, Row, Typography } from "antd";

function Layout({ children }) {
  return (
    <Row>
      <Col
        span={24}
        className="header-col"
        style={{
          background: "#fff",
          boxShadow: "0px 1px 1px 0px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Header />
      </Col>
      <Col span={24} className="app-body">
        <Body>{children}</Body>
      </Col>
      <Col span={24} className="app-footer">
        <Typography.Text>
          © 2023 Book Store All rights reserved.
        </Typography.Text>
      </Col>
    </Row>
  );
}

export default Layout;
