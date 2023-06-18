import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getOrders } from "../redux/apiCallsOrder";


export const DatatableOrder = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.orders);
  useEffect(() => {
    getOrders(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteOrder(id, dispatch);
  };
  const newData = order.map(({ address,getSex, products, ...rest }) => rest);
  console.log(newData);
  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "getName",
      headerName: "Tên Khách hàng",
      width: 230,
    },
    {
      field: "getDate",
      headerName: "Ngày Nhận",
      width: 230,
    },
  
    {
      field: "sdt",
      headerName: "Số điện thoại",
      width: 160,
    },
    {
      field: "price",
      headerName: "Tổng tiền",
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
              <button className="productListEdit">Xem chi tiết</button>
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
        Danh sách đơn hàng
      </div>
      <DataGrid
        rows={newData}
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
