import styled from "styled-components";
import { Datatable } from "../components/Datatable";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";

export const Lists = () => {
  return (
    <Wrapper>
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <Datatable />
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
