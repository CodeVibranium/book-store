import React from "react";
import Empty from "./Empty";
import { Col, Row, Skeleton } from "antd";
import EachBook from "./EachBook";
import "./Books.css";

function BooksList({ booksList, isLoading }) {
  return (
    <>
      {isLoading ? (
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
          <Col span={24}>
            <Row className="each-book" gutter={[24, 24]}>
              <Col
                span={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Skeleton.Image active size={"large"} />
              </Col>
              <Col span={20}>
                <Skeleton active />
              </Col>
            </Row>
          </Col>
        ))
      ) : booksList.items.length > 0 ? (
        <Row>
          {booksList.items.map((book) => (
            <Col span={24}>
              <EachBook book={book} />
            </Col>
          ))}
        </Row>
      ) : (
        <Empty />
      )}
    </>
  );
}

export default BooksList;
