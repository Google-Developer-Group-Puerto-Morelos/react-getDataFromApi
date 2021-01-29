import React, { useState, useEffect } from "react";
import { Row, Col, Spin } from "antd";

import { getData } from "../../Services/index";

import StateCard from "../Card/index";
function Home() {
  const [data, setData] = useState(null);
  const [state, selectState] = useState("Quintana Roo");

  const [pageSize, changePageSize] = useState(10);

  useEffect(() => {
    getData(pageSize, state).then((response) => {
      let dataRetrieved = response.results;
      console.log(dataRetrieved);
      setData(dataRetrieved);
      selectState("Quintana Roo");
      changePageSize(10);
    });
  }, []);

  return (
    <div style={{ margin: 100 }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {!data ? (
          <Spin />
        ) : (
          data.map((element) => {
            return (
              <Col span={6}>
                <StateCard data={element} />
              </Col>
            );
          })
        )}
      </Row>
    </div>
  );
}

export default Home;
