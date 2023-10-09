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
  return (
    <Row gutter={[24, 24]} style={{ marginTop: "1rem" }}>
      <Col span={12}>
        <Analytics refresh={refresh} />
      </Col>
      <Col span={12}>
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
        <Col span={20} offset={2}>
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
        <Col style={{ textAlign: "right" }} span={24}>
          <Pagination
            showSizeChanger={true}
            showQuickJumper={false}
            pageSize={pageSize}
            current={pages.currentPage}
            total={booksList.totalItems}
            pageSizeOptions={[5, 10, 20]}
            onShowSizeChange={(cur, size) => {
              setPageSize(size);
              setPages({
                ...pages,
                startIndex:
                  cur === 1
                    ? 0
                    : Math.min(
                        (cur - 1) * pageSize,
                        booksList.totalItems - pageSize
                      ),
              });
            }}
            onChange={(page, pageSize) => {
              setPages({
                ...pages,
                currentPage: page,
                startIndex:
                  page === 1
                    ? 0
                    : Math.min(
                        (page - 1) * pageSize,
                        booksList.totalItems - pageSize
                      ),
              });
            }}
          />
        </Col>
      )}
    </Row>
  );
}

export default Home;
