import React, { useEffect, useState } from "react";
import { Col, Pagination, Row } from "antd";
import Search from "./Search";
import Analytics from "./Analytics";
import BooksList from "./Books/BooksList";
import Typography from "antd/es/typography/Typography";
function Home() {
  const [pageSize, setPageSize] = useState(10);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [booksList, setBooksList] = useState({ items: [] });
  const [responseTime, setResponseTime] = useState(null);
  const [pages, setPages] = useState({
    currentPage: 1,
    startIndex: 0,
  });
  function refreshPage() {
    setRefresh((prev) => !prev);
  }

  function updateSetPagesState(page) {
    setPages({
      ...pages,
      currentPage: page,
      startIndex:
        page === 1
          ? 0
          : Math.min((page - 1) * pageSize, booksList.totalItems - pageSize),
    });
  }
  return (
    <Row gutter={[24, 24]} style={{ marginTop: "1rem" }}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Analytics refresh={refresh} />
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Search
          setBooksList={setBooksList}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          pages={pages}
          pageSize={pageSize}
          setPageSize={setPageSize}
          setPages={setPages}
          setResponseTime={setResponseTime}
          responseTime={responseTime}
          refreshPage={refreshPage}
        />
      </Col>
      {responseTime && (
        <Col xs={24} sm={24} md={20} lg={20} xl={20} offset={2}>
          <Typography.Text type="secondary">
            Fetched in {responseTime / 1000} sec
          </Typography.Text>
        </Col>
      )}
      <Col span={20} offset={2}>
        <BooksList
          responseTime={responseTime}
          booksList={booksList}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </Col>
      {booksList.items.length > 0 && (
        <Col style={{ textAlign: "right", marginBottom: "1rem" }} span={24}>
          <Pagination
            showSizeChanger={true}
            showQuickJumper={false}
            pageSize={pageSize}
            current={pages.currentPage}
            total={booksList.totalItems}
            pageSizeOptions={[5, 10, 20]}
            onShowSizeChange={(cur, size) => {
              setPageSize(size);
              updateSetPagesState(cur);
            }}
            onChange={(page, pageSize) => {
              updateSetPagesState(page);
            }}
          />
        </Col>
      )}
    </Row>
  );
}

export default Home;
