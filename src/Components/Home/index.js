import React, { useState, useEffect } from "react";
import { Row, Col, Spin, Input, Button } from "antd";
import { Container, SubContainer, MainButton } from "../../Styled/index";
import { getData } from "../../Services/index";

import StateCard from "../Card/";

function Home() {
  const [data, setData] = useState(null);
  const [state, selectState] = useState("Quintana Roo");
  const [pageSize, changePageSize] = useState(10);
  const [search, setSearch] = useState(false);

  const updateData = () => {
    return getData(pageSize, state).then((response) => {
      let dataRetrieved = response.results;
      console.log(dataRetrieved);
      setData(dataRetrieved);
    });
  };

  useEffect(() => {
    updateData();
  }, [data]);

  return (
    <Container>
      <Input
        placeholder="Estado"
        onChange={(e) => selectState(e.target.value)}
      />
      <Button onClick={() => updateData()}>Search</Button>
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
    </Container>
  );
}

export default Home;
