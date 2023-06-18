import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteWarehouse, getWarehouses } from "../redux/apiCallsWarehouse";



export const DatatableWarehouse = () => {
  const dispatch = useDispatch();
  const warehouses = useSelector((state) => state.warehouse.warehouses);
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getWarehouses(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteWarehouse(id, dispatch);
  };
  console.log(warehouses);
  console.log(products)
  const columns = [
    { field: "_id", headerName: "ID", width: 130 },
    {
      field: "name",
      headerName: "Tên Nhà kho",
      width: 230,
    },
    {
      field: "address",
      headerName: "Địa chỉ kho",
      width: 430,
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

  return (
    <Wrapper>
      <div className="datatableTitle">
        Danh sách nhà kho chứa sản phẩm

      </div>
      <DataGrid
        rows={warehouses}
        columns={columns}
        disableSelectionOnClick
        getRowId={(row) => row._id}
        pageSize={5}
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
