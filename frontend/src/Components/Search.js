import { AutoComplete, Input, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { searchBooksAPI } from "../services/books.services";

function Search({
  width = "100%",
  size = "large",
  setBooksList,
  isLoading,
  setIsLoading,
  pages,
  pageSize,
  setPageSize,
  setPages,
  setResponseTime,
}) {
  // const [isLoading, setIsLoading] = useState(false);
  const [searchedVal, setSearchedVal] = useState("");
  useEffect(() => {
    if (searchedVal.length > 0) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        handleSearch();
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setBooksList({ items: [] });
      setPages({
        currentPage: 1,
        startIndex: 0,
      });
      setPageSize(10);
    }
  }, [searchedVal, pages, pageSize]);

  async function handleSearch() {
    try {
      const booksData = await searchBooksAPI({
        searchQuery: searchedVal,
        startIndex: pages.startIndex,
        maxResults: pageSize,
      });
      setBooksList(booksData.data.books);
      setResponseTime(booksData.data.responseTimeInMs);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <AutoComplete
      style={{ width: width }}
      onChange={(value) => setSearchedVal(value)}
      value={searchedVal}
    >
      <Input.Search
        allowClear
        size={size}
        placeholder="Search for anything"
        suffix={
          <Spin
            size="small"
            style={{ visibility: isLoading ? "visible" : "hidden" }}
          />
        }
      />
    </AutoComplete>
  );
}

export default Search;
