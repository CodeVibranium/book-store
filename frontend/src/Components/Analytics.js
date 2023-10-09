import { Card, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { getAnalyticsAPI } from "../services/books.services";
import Typography from "antd/es/typography/Typography";

function Analytics({ refresh }) {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAnalyticsAPI()
      .then((res) => setAnalytics(res.data.authorsData))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [refresh]);
  return (
    <Card>
      <Typography.Title level={4}>Most Appeared Author</Typography.Title>
      {loading ? (
        <Skeleton.Input active block />
      ) : (
        <Typography.Paragraph>
          {analytics?.[0]?.name} - {analytics?.[0]?.appeared}{" "}
        </Typography.Paragraph>
      )}
    </Card>
  );
}

export default Analytics;
