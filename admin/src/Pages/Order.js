import styled from "styled-components";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import { DatatableOrder } from "../components/DatatableOrder";

export const Order = () => {

  return (
    <Wrapper>
      <Sidebar />
      <div className="listContainer">
        <Topbar />
  <DatatableOrder/>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  .listContainer {
    flex: 6;
  }
`;
