import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const searchBooksAPI = ({
  searchQuery,
  startIndex = 0,
  maxResults = 10,
}) => {
  return axios.get(
    `${BASE_URL}/books/all?q=${searchQuery}&startIndex=${startIndex}&maxResults=${maxResults}`
  );
};

export const getAnalyticsAPI = () => {
  return axios.get(`${BASE_URL}/analytics/most-appeared-author/`);
};
