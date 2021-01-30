import React from "react";
import { Card } from "antd";

function StateCard({ data }) {
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        key={data._id}
        title={data.name}
        bordered={false}
        style={{ width: 300 }}
      >
        <p>{data.state}</p>
        <p>{data.latitude}</p>
        <p>{data.longitude}</p>
        <p>{data.tempc}</p>
      </Card>
    </div>
  );
}

export default StateCard;
