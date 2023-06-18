import React from "react";
import styled from "styled-components";
import { Charts } from "../components/Charts";
import Featured from "../components/Featured";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import Widget from "../components/Widget";
export const Home = () => {
  return (
    <HomeStyled>
      <Sidebar />
      <Container>
        <Topbar />
        <C>
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <Featured />
            <Charts title="Last 6 Months (Revenue)" aspect={2 / 1} />
          </div>
        </C>
      </Container>
    </HomeStyled>
  );
};
const HomeStyled = styled.div`
  display: flex;
  width: 100%;
`;
const C = styled.div`
  width: 1334px;
`;
const Container = styled.div`
  .widgets,
  .charts {
    display: flex;
    padding: 20px;
    gap: 20px;
  }

  .charts {
    padding: 5px 20px;
  }
  .listContainer {
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 20px;
    margin: 20px;

    div {
      font-weight: 500;
      color: gray;
      margin-bottom: 15px;
    }
  }
`;
