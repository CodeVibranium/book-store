import React from "react";
import library from "../../assets/library.jpg";
import { Typography } from "antd";
import "./Empty.css";
function Empty() {
  return (
    <div className="empty">
      <div className="shaded">
        <img alt="Library" src={library} className="library-img" />
      </div>
      <Typography.Title className="title">
        Search for anything in the library
      </Typography.Title>
    </div>
  );
}

export default Empty;
