import React, { useState, useEffect } from "react";
import { Row, Col, Spin, Input, Button } from "antd";
import { Container, SubContainer, MainButton } from "../../Styled/index";
import { getData } from "../../Services";
// import logo from './assets/svg/vercel.svg'
import Icon from '../../assets/svg/logo'

import StateCard from "../../Components/Card";

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
            {/* <img src={logo} style={{height:200,width:200}}/> */}
            <Icon colorSvg={'red'}/>
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
