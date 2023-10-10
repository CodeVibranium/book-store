import { Col, Row, Typography } from "antd";
import React from "react";
import "./Books.css";
import BookNotFound from "../../assets/bookNotFound.jpg";
function EachBook({ book }) {
  const ellipses = { rows: 2, expandable: true, symbol: "more" };
  return (
    <Row gutter={[24, 24]} className="each-book">
      <Col xs={24} sm={10} md={6} lg={4} xl={4}>
        <img
          src={book?.volumeInfo?.imageLinks?.thumbnail || BookNotFound}
          alt={`${book.volumeInfo.title} thumbnail`}
          style={{ width: "100%", height: "180px", objectFit: "contain" }}
        />
      </Col>
      <Col xs={24} sm={14} md={18} lg={20} xl={20}>
        <Row>
          <Col span={24}>
            <Typography.Title level={2} ellipsis={ellipses}>
              {book.volumeInfo.title}
            </Typography.Title>
          </Col>
          <Col span={24}>
            <Typography.Text type="secondary" ellipsis={ellipses}>
              {book.volumeInfo.subtitle}
            </Typography.Text>
          </Col>

          <Col span={24}>
            <Typography.Text>Authored By: </Typography.Text>
            {book.volumeInfo.authors?.map((eachAuthor) => (
              <Typography.Text type="secondary">{eachAuthor}</Typography.Text>
            ))}
            {book.volumeInfo?.authors?.length === 0 ||
              (!book.volumeInfo?.authors && (
                <Typography.Text type="secondary">Unknown</Typography.Text>
              ))}
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Typography.Text>Published By: </Typography.Text>
            <Typography.Text>{book.volumeInfo.publisher} on </Typography.Text>
            <Typography.Text type="secondary">
              {book.volumeInfo.publishedDate}
            </Typography.Text>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Typography.Paragraph ellipsis={ellipses}>
              {book.volumeInfo.description ||
                book?.searchInfo?.textSnippet ||
                "No description found, please explore the book and let us know"}
            </Typography.Paragraph>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default EachBook;
