import React, { useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { publicRequest } from 'requestMethods';
import { Block, Flex, mobile, Payment } from 'responsive';
import styled from 'styled-components';
import payment from '../img/payment.png';
import Bg4 from '../img/pr4.jpg';
import PrimaryButton from './PrimaryButton';
const OrderItem = () => {
  const Carts: any = useSelector((state: RootStateOrAny) => state.cart);
  const User: any = useSelector((state: RootStateOrAny) => state.auth.currentUser);
  const [data, setData] = React.useState<any>();
  const [data1, setData1] = React.useState<any>([]);
  const Id = User ? User._id : '';
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(data1);
  useEffect(() => {
    const getCart = async () => {
      try {
        const res = await publicRequest.get(`/orders/find/${Id}`);
        setData(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getCart();
  }, [Id]);
  useEffect(() => {
    const getCart = async () => {
      try {
        const res = await publicRequest.get(`/carts/total/user/cart/product/${Carts.id}`);
        setData1(res.data[0].products);
      } catch (error) {
        console.log(error);
      }
    };
    getCart();
  }, [Carts]);
  return (
    <C>
      {data && (
        <Container>
          <Success>
            <h4>ĐẶT HÀNG THÀNH CÔNG</h4>
          </Success>
          <Thank>
            Cảm ơn {data.getSex} <b>{data.getName}</b> đã cho Shop của em có cơ hội phục vụ.
          </Thank>
          <PrimaryButton title={'Trạng Thái: Đang chuyển'} dh />

          <Address>
            <div className="flex">
              <span>ĐƠN HÀNG: {data._id}</span>
              <span>
                Quan lý đơn hàng: <b>Hủy</b>
              </span>
            </div>
            <div className="Info">
              <p>
                <b>Người nhận hàng: </b>
                {data.getSex} {data.getName}, {data.sdt}.
              </p>
              <p>
                <b>Nhận hàng tại địa chỉ: </b>Dịa chỉ {data.address[0].sonha}, Xã{' '}
                {data.address[0].xa}, Huyện {data.address[0].huyen}, Tỉnh {data.address[0].city}.
              </p>
              <p>
                <b>Tổng Tiền: </b>
                <span>
                  {data.price} <u>đ</u>
                </span>
              </p>
            </div>
          </Address>
          <Confirm>
            <h5>Đơn hàng chưa được thanh toán</h5>
          </Confirm>
          <Payments>
            <h4>Chọn hình thức thanh toán:</h4>
            <div>
              <input type="radio" name="hao" value="truong" />
              <Img>
                <Icon />
              </Img>
              <label>Thanh toán tiền mặt khi nhận hàng</label>
            </div>
            <div>
              <input type="radio" name="hao" value="nhan" />
              <Img>
                <IconC />
              </Img>
              <i className="icon"></i>
              <label>Chuyển khoản ngân hàng</label>
            </div>
            <div>
              <input type="radio" name="hao" value="nhan" />
              <Img>
                <IconATM />
              </Img>
              <label>Qua thẻ ATM(có Internet Banking)</label>
            </div>
            <div>
              <input type="radio" name="hao" value="nhan" />
              <Img>
                <IconQR />
              </Img>
              <label>Qua QR Code</label>
            </div>
            <div>
              <input type="radio" name="hao" value="nhan" />
              <Img>
                <IconMoMo />
              </Img>
              <label>Qua Ví điện tử MoMo</label>
            </div>
            <div>
              <input type="radio" name="hao" value="nhan" />
              <Img>
                <IconVisa />
              </Img>
              <label>Qua thẻ quốc tế Visa, Master,JCB</label>
            </div>
            <div>
              <input type="radio" name="hao" value="nhan" />
              <Img>
                <IconGrab />
              </Img>
              <label>Qua Ví điện từ Moca by Grab</label>
            </div>
          </Payments>
          <But>
            <PrimaryButton title="XÁC NHẬN" primary />
          </But>
          <Get>
            <h4>THỜI GIAN NHẬN HÀNG</h4>
            <Item className="h">
              <h5>Nhận hàng trươc 22h00 Ngày mai(09/05)</h5>
              <div className="item">
                {data1?.map((product: any, index: any) => (
                  <div key={index} className="boder">
                    <img
                      src={product.product.img === undefined ? Bg4 : PF + product.product.img}
                      alt=""
                    ></img>
                    <div>
                      <p>{product.product.title}</p>
                      <span>Màu: {product.product.color}</span>
                      <span>Số lượng: {product.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Item>
          </Get>
          <NavLink to="/products/dienthoai">
            <Back>Mua thêm sản phâm khác</Back>
          </NavLink>
        </Container>
      )}
    </C>
  );
};

const C = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3)), center #f3f3f3;
  background-size: cover;
  ${Flex('center', 'center')}
  padding-top:40px;
  padding-bottom: 20px;
`;
const Container = styled.div`
  border: 2px solid #f3f3f3;
  border-radius: 4px;
  ${Block('600px', '', 'white')}
  opacity: 0.8;
  ${mobile({ width: '75%' })}
`;
const Success = styled.div`
  height: 70px;
  background-color: teal;
  color: white;
  h4 {
    text-align: center;
    line-height: 70px;
  }
`;
const Thank = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;
const Address = styled.div`
  display: block;
  margin-left: 30px;
  width: 540px;
  height: 150px;
  background-color: #f3f3f3;
  .flex {
    display: flex;
    padding: 10px;
    justify-content: space-between;
    b {
      color: #ff1313;
    }
  }
  .Info {
    display: block;
    margin-left: 20px;
    p {
      padding: 3px;
      span {
        color: #ff1313;
        font-weight: 700;
      }
    }
  }
`;
const Confirm = styled.div`
  color: #fb6e2e;
  background: rgba(251, 110, 46, 0.05);
  border: 1px dashed #fb6e2e;
  box-sizing: border-box;
  border-radius: 4px;
  text-align: center;
  padding: 10px 0;
  margin: 20px;
  cursor: pointer;
`;
const Img = styled.div`
  vertical-align: middle;
  display: inline-block;
`;
const Icon = styled.div`
  ${Payment({
    backgroundPosition: '-5px -81px',
  })}
`;
const IconC = styled.div`
  ${Payment({
    backgroundPosition: '-39px -81px',
  })}
`;
const IconATM = styled.div`
  ${Payment({
    backgroundPosition: '-81px -80px',
  })}
`;
const IconQR = styled.div`
  ${Payment({
    backgroundPosition: '-123px -79px',
  })}
`;
const IconMoMo = styled.div`
  ${Payment({
    backgroundPosition: '-159px -79px',
  })}
`;
const IconVisa = styled.div`
  ${Payment({
    backgroundPosition: '-197px -85px',
  })}
`;
const IconGrab = styled.div`
  ${Payment({
    backgroundPosition: '-232px -80px',
  })}
`;

const Payments = styled.div`
  margin: 20px;
  h4 {
    margin-bottom: 10px;
  }
  div {
    padding: 3px;
    input {
      padding: 10px;
      border-radius: 8px;
    }
    label {
      margin-left: 4px;
      font-size: 16px;
    }
    i {
      background-image: ${payment};
      background-repeat: no-repeat;
      background-size: 368px 190px;
      width: 20px;
      height: 20px;
    }
  }
`;
const But = styled.div`
  ${Flex('center', 'center')}
`;
const Get = styled.div`
  margin: 20px;
  .h {
    margin-top: 10px;
    padding: 5px;
    border: 1px solid #ccc;
  }
`;
const Item = styled.div`
  .item {
    div {
      display: flex;
      padding-left: 40px;
      img {
        width: 60px;
        padding: 4px;
      }
      div {
        display: inline-block;
        padding: 6px;
        width: 100%;
        font-weight: 700;
        span {
          font-size: 13px;
          padding: 5px;
          color: teal;
        }
      }
      p {
        padding: 0 5px;
      }
    }
  }
`;
const Back = styled.div`
  padding: 15px 0;
  margin: 10px 30px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #fb6e2e;
  color: #fb6e2e;
  border-radius: 5px;
  width: 90%;
`;

export default OrderItem;
