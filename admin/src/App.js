import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Lists } from "./Pages/List";
import { Home } from "./Pages/Home";
import Single from "./Pages/Single";
import New from "./Pages/New";
import {
  //  productInputs,
  userInputs,
} from "./data/formSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import styled from "styled-components";
import { ProductList } from "./Pages/ProductList";
import { Order } from "./Pages/Order";
import { Product } from "./Pages/Product";
import { Login } from "./Pages/Login";
import { NewProduct } from "./Pages/NewProduct";
import { Provider } from "./Pages/Provider";
import { Stock } from "./Pages/Stock";
import { Warehouse } from "./Pages/Warehouse";
import { NewProvider } from "./Pages/NewProvider";
import { NewWarehouse } from "./Pages/NewWarehouse";
import { NewStock } from "./Pages/NewStock";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <AppStyled>
      <div className={darkMode ? "app dark" : "app"}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="users">
              <Route index element={<Lists />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<ProductList />} />
            </Route>
            <Route path="providers">
              <Route index element={<Provider />} />
            </Route>

            <Route path="stock">
              <Route index element={<Stock />} />
            </Route>
            <Route path="warehouse">
              <Route index element={<Warehouse />} />
            </Route>
            <Route path="orders">
              <Route index element={<Order />} />
            </Route>
            <Route path="newproduct" element={<NewProduct />} />
            <Route path="newprovider" element={<NewProvider />} />
            <Route path="newwarehouse" element={<NewWarehouse />} />
            <Route path="newstock" element={<NewStock />} />
            <Route path="/product/:productId" element={<Product />} />
          </Routes>
        </Router>
      </div>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  .app.dark {
    background-color: #111;
    color: rgb(156, 156, 156);
    .chartGrid {
      stroke: rgba(228, 228, 228, 0.219);
    }

    .table {
      background-color: #111;

      .tableCell {
        color: gray;
      }
    }
    .navbar {
      color: #999;
      border-color: #333;

      .search {
        border-color: gray;
      }
    }

    .sidebar {
      background-color: #111;
      border-color: #333;

      .top {
        .logo {
          color: #999;
        }
      }
      hr {
        border-color: #333;
      }

      ul {
        li {
          &:hover {
            background-color: #333;
          }

          .icon {
            color: #999;
          }
        }
      }
    }
    .datatable {
      .datagrid {
        color: gray;
        border: none;

        .viewButton,
        .deleteButton,
        .cellWithStatus {
          color: gray;
          border: none;
        }
      }
    }
    input {
      background-color: transparent;
    }
  }
`;
export default App;
