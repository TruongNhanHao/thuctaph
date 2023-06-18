import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deleteCart, updateQuantity } from 'features/cart/ApiCart';
import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { mobile } from 'responsive';
import styled from 'styled-components';
import Bg4 from '../img/pr4.jpg';

export const TotalProducts = ({ product }: any) => {
  const dispatch = useDispatch();
  const User: any = useSelector((state: RootStateOrAny) => state.auth.currentUser);
  const Carts: any = useSelector((state: RootStateOrAny) => state.cart);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // console.log(product);
  const Id = User ? User._id : '';
  const [Quantity, setQuantity] = React.useState<number>(product.quantity);
  const handleClickQuantity = (item: string) => {
    if (item === 'des') {
      setQuantity(Quantity - 1);
      updateQuantity({ quantity: -1, productId: product.productId, userId: Id }, dispatch);
    } else if (item === 'aes') {
      setQuantity(Quantity + 1);
      updateQuantity({ quantity: 1, productId: product.productId, userId: Id }, dispatch);
      console.log(product.productId);
    }
  };
  const handleClick = () => {
    deleteCart({ userId: Id, productId: product.productId }, Quantity, dispatch);
  };
  return (
    <div>
      <hr />
      <Products>
        <Img>
          <img
            src={product.product.img === undefined ? Bg4 : PF + product.product.img}
            alt=""
          ></img>
          <br />
          <div className="cancel" onClick={() => handleClick()}>
            <DeleteOutlineIcon sx={{ fontSize: 22 }} />
          </div>
        </Img>
        <Detail>
          <h3>{product.product.title}</h3>
          <span>
            <b>ID: </b>
            {product.product._id}
          </span>
          <div>
            <b>Màu: </b>
            <ProductColor color={product.product.color} />
          </div>
          <span>
            <b>Ram: </b>
            {product.product.ram}
          </span>
        </Detail>
        <Count>
          <div>
            <span>
              {(product.product.count * Quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} đ
            </span>
            <br />
            <span>Còn hàng</span>
          </div>
          <Amount>
            {Carts.isFetching === true ? (
              <div className="click">-</div>
            ) : (
              <div onClick={() => handleClickQuantity('des')}>-</div>
            )}
            <div>{Quantity}</div>
            {Carts.isFetching === true ? (
              <div className="click">+</div>
            ) : (
              <div onClick={() => handleClickQuantity('aes')}>+</div>
            )}
          </Amount>
        </Count>
      </Products>
    </div>
  );
};

const Products = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const Img = styled.div`
  flex: 1;
  text-align: center;
  padding: 7px;
  img {
    background-repeat: no-repeat;
    width: 70px;
  }
  .cancel {
    margin: 6px;
    margin-left: 10px;
    cursor: pointer;
    :hover {
      color: red;
    }
  }
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
  border: 1px solid black;
  background-color: ${(props) => props.color};
`;
const Detail = styled.div`
  flex: 3;
  padding-right: 15px;
  line-height: 26px;
  h3 {
    margin-bottom: 15px;
  }
  span {
    padding-bottom: 20px;
  }
  div {
    display: flex;
    line-height: 20px;
  }
`;
const Count = styled.div`
  flex: 1;
  div {
    span:first-child {
      color: red;
      margin-left: 16px;
      line-height: 24px;
    }
    span:last-child {
      width: 100px;
      background-color: teal;
      padding: 5px;
      display: block;
      text-align: center;
      border-radius: 20px;
      cursor: pointer;
      color: white;
    }
  }
`;
const Amount = styled.div`
  display: flex;
  margin-top: 24px;
  color: teal;
  div {
    cursor: pointer;
    font-size: 22px;
    border: 1px solid teal;
    padding: 5px 12px;
  }
  .click {
    color: #ccc;
    cursor: no-drop;
  }
`;
