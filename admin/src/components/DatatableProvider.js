import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteProvider, getProviders } from "../redux/apiCallsProvider";


export const DatatableProvider = () => {
  const dispatch = useDispatch();
  const provider = useSelector((state) => state.provider.providers);
  useEffect(() => {
    getProviders(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProvider(id, dispatch);
  };
  console.log(provider);
  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Nhà cung cấp",
      width: 230,
    },
    {
      field: "phone",
      headerName: "Điện Thoại",
      width: 230,
    },
  
    {
      field: "address",
      headerName: "Địa chỉ",
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

  return (
    <Wrapper>
      <div className="datatableTitle">
        Danh sách nhà cung cấp
      </div>
      <DataGrid
        rows={provider}
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
