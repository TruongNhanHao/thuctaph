import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteStock, getStocks } from "../redux/apiCallsStock";



export const DatatableStock = () => {
  const dispatch = useDispatch();
  const warehouse = useSelector((state) => state.warehouse.warehouses);
  const product = useSelector((state) => state.product.products);
  const stock = useSelector((state) => state.stock.stocks);
  useEffect(() => {
    getStocks(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteStock(id, dispatch);
  };
  // console.log(warehouse);
  // console.log(product)
  // console.log(stock);
  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "productName",
      headerName: "Sản phẩm trong kho",
      width: 230,
    },
    {
      field: "warehouseName",
      headerName: "Tên nhà kho",
      width: 230,
    },
  
    {
      field: "quantity",
      headerName: "Số lượng nhập kho",
      width: 160,
    },
    {
      field: "import_price",
      headerName: "Giá nhập kho",
      width: 160,
    },
    {
      field: "export_price",
      headerName: "Giá xuất kho",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <NavLink to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </NavLink>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  const productMap = {};

  product.forEach((product) => {
    productMap[product._id] = product.title;
  });
  const warehouseMap = {};
  warehouse.forEach((warehouse) => {
    warehouseMap[warehouse._id] = warehouse.name;
  });
  const transformedStockData = stock.map((stockItem) => {
    const productName = productMap[stockItem.id_product];
    const warehouseName = warehouseMap[stockItem.id_nhakho];
    return { ...stockItem, productName,warehouseName };
  });

  console.log(transformedStockData)
  return (
    <Wrapper>
      <div className="datatableTitle">
        Danh sách nhà cung cấp
      </div>
      <DataGrid
        rows={transformedStockData}
        columns={columns}
        disableSelectionOnClick
        getRowId={(row) => row._id}
        pageSize={9}
        checkboxSelection
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 600px;
  padding: 20px;
  .productListItem {
    display: flex;
    align-items: center;
    .productListImg {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 10px;
    }
  }
  .productListEdit {
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
  }
  .productListDelete {
    color: red;
    cursor: pointer;
  }
`;
