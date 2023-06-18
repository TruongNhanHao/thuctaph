import styled from "styled-components";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import { DatatableProvider } from "../components/DatatableProvider";
import { Link } from "react-router-dom";


export const Provider = () => {
  return (
    <Wrapper>
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <Link to="/newprovider">
              <button className="create">Create</button>
            </Link>
        <DatatableProvider />
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
  .create {
      width: 80px;
      border: none;
      padding: 5px;
      background-color: teal;
      color: white;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
    }
`;
