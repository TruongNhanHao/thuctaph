/* eslint-disable array-callback-return */
import Footer from 'components/Footer';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Navbar } from 'components/Navbar';
import { NavbarMain } from 'components/NavbarMain';
import PrimaryButton from 'components/PrimaryButton';
import { TotalProducts } from 'components/TotalProducts';
import React, { useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Address1 } from '../data/Address';
import { publicRequest } from 'requestMethods';
import { Block, Flex, mobile } from 'responsive';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import Bg4 from '../img/pr4.jpg';
import { Input } from 'components/Input';
import QrCode2Icon from '@mui/icons-material/QrCode2';
export const Total = () => {
  const [data, setData] = React.useState<any>([]);
  const [name, setName] = React.useState<string>('');
  const [sdt, setSdt] = React.useState<string>('');
  const [sex, setSex] = React.useState<any>('');
  const [total, setTotal] = React.useState<any>('');
  const [tinh, setTinh] = React.useState<string>('');
  const [huyen, setHuyen] = React.useState<string>('');
  const [xa, setXa] = React.useState<string>('');
  const [xom, setXom] = React.useState<string>('');
  const [getDate, setGetDate] = React.useState<string>('1/5');
  const [getTime, setGetTime] = React.useState<string>('17H');
  const show0Ref = React.useRef<HTMLDivElement | null>(null);
  const show1Ref = React.useRef<HTMLDivElement | null>(null);
  const show2Ref = React.useRef<HTMLDivElement | null>(null);
  const show3Ref = React.useRef<HTMLDivElement | null>(null);
  const show4Ref = React.useRef<HTMLDivElement | null>(null);
  const history = useNavigate();
  const [err, setErr] = React.useState<boolean>(false);
  const [show, setShow] = React.useState<boolean>(false);
  const [show1, setShow1] = React.useState<boolean>(false);
  const [show2, setShow2] = React.useState<boolean>(false);
  const tinhs = Object.keys(Address1);
  const huyens = Object.keys(Address1[tinh === '' ? 'Sóc Trăng' : tinh]);
  const xas = huyen === '' ? [] : Address1[tinh][huyen];
  const date = ['1/5', '2/5', '3/5', '4/5', '5/5'];
  const time = [
    '1H',
    '2H',
    '3H',
    '4H',
    '5H',
    '6H',
    '7H',
    '8H',
    '9H',
    '10H',
    '11H',
    '12H',
    '13H',
    '14H',
    '15H',
    '16H',
    '17H',
  ];
  const Carts: any = useSelector((state: RootStateOrAny) => state.cart);
  const User: any = useSelector((state: RootStateOrAny) => state.auth.currentUser);
  const Id = User ? User._id : '';
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const arr = [
    show0Ref.current!,
    show1Ref.current!,
    show2Ref.current!,
    show3Ref.current!,
    show4Ref.current!,
  ];
  useEffect(() => {
    const getCart = async () => {
      try {
        const res = await publicRequest.get(`/carts/total/user/cart/product/${Carts.id}`);
        // const res = await publicRequest.get("/carts/total/user/cart/product/643ff9a4f4fa372779145222");
        console.log(Carts.id)
        const kq = res.data[0].products
          ?.map((item: any) => item.quantity * item.product.count)
          .reduce((prev: any, curr: any) => prev + curr, 0);
        setTotal(kq.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
        setData(res.data[0].products);
      } catch (error) {
        console.log(error);
      }
    };
    getCart();
  }, [Carts]);
  const handleClickFilter = (e: string, i: number) => {
    if (e === 'show') {
      if (arr[i].className.split(' ').includes('show')) {
        arr[i].classList.remove('show');
        setShow(true);
      }
    } else if (e === 'hidden') {
      arr[i].classList.add('show');
      setShow(false);
    }
    // console.log(e, i);
  };
  const handleRadio = (e: React.FormEvent<HTMLDivElement>) => {
    const element = e.currentTarget as HTMLInputElement;
    setSex(element.value);
  };
  const handleClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let i;
    try {
      await publicRequest.post('/orders/', {
        userId: Id,
        products: Carts.carts,
        getName: name,
        getSex: sex,
        getDate: getDate + '-' + getTime,
        sdt: sdt,
        price: total,
        address: [
          {
            city: tinh,
            huyen: huyen,
            xa: xa,
            sonha: xom,
          },
        ],
      });
      i = 1;
      setErr(false);
    } catch (error) {
      console.log(error);
      setErr(true);
    }
    if (i === 1) {
      history('/orders');
    }
  };
  return (
    <Contai>
      <Navbar />
      <NavbarMain />
      <Ch>Ưu đãi siêu khủng! Giao hàng miễn phí cho các đơn đặt hàng trên $ 50</Ch>
      <C>
        <Container>
          <NavLink to="/products/dienthoai">
            <h5>
              <ArrowBackIosNewIcon className="IconBack" />
              <span> Mua thêm sản phẩm khác</span>
            </h5>
          </NavLink>
          <H>
            {data?.map((product: any, index: any) => (
              <TotalProducts key={index} product={product} />
            ))}
          </H>
          <Totals>
            <div>
              Tạm tính( <b>{Carts.quantity}</b> sản phẩm )
            </div>
            <div>{total}đ</div>
          </Totals>
          <Info>
            <h3>Thông tin khách hàng</h3>
            <Radio>
              <input type="radio" name="nhan" value="Chi" onChange={(e) => handleRadio(e)} />
              <label>Chị</label>
              <input type="radio" name="nhan" value="Anh" onChange={(e) => handleRadio(e)} />
              <label>Anh</label>
            </Radio>
            <Inputs>
              <Input title="Họ và tên" set={setName} />
              <Input title="Số điện thoại" set={setSdt} />
            </Inputs>
            <div>
              <h3>Chọn cách thức giao hàng</h3>
              <Radio>
                <input type="radio" name="hao" value="truong" />
                <label>Giao tận nơi</label>
                <input type="radio" name="hao" value="nhan" />
                <label>Nhận tại siêu thị</label>
              </Radio>
            </div>
            <Add>
              <div>
                <Address>
                  <p>Chọn địa chỉ để biết thời gian nhân hàng và phí vận chuyển(nếu có)</p>
                  <div className="gird">
                    <Item
                      className="op"
                      onClick={() => handleClickFilter(show === true ? 'not' : 'show', 0)}
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      <span>Tỉnh {tinh}</span>
                      <Filters className="show" ref={show0Ref}>
                        <Top>
                          <div onClick={() => handleClickFilter('hidden', 0)}>
                            <CloseIcon />
                          </div>
                        </Top>

                        <Bottom>
                          {tinhs?.map((name: any, i: number) => (
                            <div key={i} onClick={() => setTinh(name)}>
                              Tỉnh {name}
                            </div>
                          ))}
                        </Bottom>
                      </Filters>
                    </Item>
                    <Item
                      className="op"
                      onClick={() => handleClickFilter(show === true ? 'not' : 'show', 1)}
                    >
                      <span>{huyen === '' ? 'Chọn Huyện' : 'H.' + huyen}</span>
                      <Filters className="show" ref={show1Ref}>
                        <Top>
                          <div onClick={() => handleClickFilter('hidden', 1)}>
                            <CloseIcon />
                          </div>
                        </Top>
                        <Bottom>
                          {huyens?.map((name: any, i: number) => (
                            <div key={i} onClick={() => setHuyen(name)}>
                              Huyện {name}
                            </div>
                          ))}
                        </Bottom>
                      </Filters>
                    </Item>
                  </div>{' '}
                  <div className="gird">
                    <Item
                      className="op"
                      onClick={() => handleClickFilter(show === true ? 'not' : 'show', 2)}
                    >
                      <span>{xa === '' ? 'Chọn Xã' : xa}</span>
                      <Filters className="show" ref={show2Ref}>
                        <Top>
                          <div onClick={() => handleClickFilter('hidden', 2)}>
                            <CloseIcon />
                          </div>
                        </Top>
                        <Bottom>
                          {xas?.map((name: any, i: number) => (
                            <div key={i} onClick={() => setXa(name)}>
                              {name}
                            </div>
                          ))}
                        </Bottom>
                      </Filters>
                    </Item>
                    <Item className="input">
                      <div>
                        <Input title="Số Nhà, tên đường" set={setXom} />
                      </div>
                    </Item>
                  </div>
                </Address>
                <InfoProducts>
                  <Date className="date">
                    <span>
                      Giao hàng trước ngày {getDate + '-' + getTime}
                      <span onClick={() => setShow1(!show1)}>Chọn ngày giờ khác</span>
                    </span>
                    <div className={show1 === true ? '' : 'none'}>
                      <div className="gird">
                        <Item
                          className="op op1"
                          onClick={() => handleClickFilter(show === true ? 'not' : 'show', 3)}
                        >
                          <span>Giao dịch trước ngày</span>
                          <Filters1 className="show dat" ref={show3Ref}>
                            <div onClick={() => handleClickFilter('hidden', 3)}>
                              {date?.map((name: any, i: number) => (
                                <div key={i} onClick={() => setGetDate(name)}>
                                  Giao trước {name}
                                </div>
                              ))}
                            </div>
                          </Filters1>
                        </Item>
                        <Item
                          className="op"
                          onClick={() => handleClickFilter(show === true ? 'not' : 'show', 4)}
                        >
                          <span>Giao dịch trước giờ</span>
                          <Filters1 className="show" ref={show4Ref}>
                            <div onClick={() => handleClickFilter('hidden', 4)}>
                              {time?.map((name: any, i: number) => (
                                <div key={i} onClick={() => setGetTime(name)}>
                                  Giao trước {name}
                                </div>
                              ))}
                            </div>
                          </Filters1>
                        </Item>
                      </div>
                    </div>
                  </Date>
                  {data?.map((product: any, index: any) => (
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
                </InfoProducts>
              </div>
            </Add>
          </Info>
          <Discount>
            <div>
              <span onClick={() => setShow2(!show2)}>
                <QrCode2Icon className="qr" />
                Sử dụng mã giảm giá
              </span>
            </div>
            <div className={show2 === true ? '' : 'show'}>
              <Input title="Code" />
            </div>
          </Discount>
          <TotalsProducts>
            <p>Tổng tiền</p>
            <span>{total}đ</span>
          </TotalsProducts>
          <Pri>
            <PrimaryButton title={'Đặt Hàng'} primary onClick={handleClick} />
          </Pri>
          {err && <Error>Vui Lòng Điền đủ thông tin</Error>}
        </Container>
      </C>
      <Footer />
    </Contai>
  );
};
const Contai = styled.div``;
const Ch = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const C = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3)), center #f3f3f3;
  background-size: cover;
  ${Flex('center', 'center')}
  padding-top:40px;
  padding-bottom: 20px;
`;

const Container = styled.div`
  border: 2px solid #f3f3f3;
  padding-left: 5px;
  border-radius: 4px;
  ${Block('600px', '', 'white')}
  opacity: 0.8;
  ${mobile({ width: '75%' })}
  h5 {
    color: red;
    font-weight: 600;
    padding: 10px;
    width: 190px;
    .IconBack {
      font-size: 18px;
      padding-top: 6px;
    }
    span {
      margin-left: -6px;
    }
    :hover {
      color: teal;
    }
  }
`;
const H = styled.div`
  display: block;
`;

const Totals = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 2px solid #ccc;
`;
const Info = styled.div`
  display: block;
`;
const Radio = styled.div`
  padding: 2px 20px;
  margin-top: 10px;
  margin-bottom: 5px;
  input {
    margin-right: 5px;
    padding: 10px;
    border-radius: 8px;
  }
  label {
    margin-right: 20px;
    font-size: 18px;
  }
`;
const Inputs = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
`;
const Add = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 540px;
  margin-left: 30px;
  border: 1px solid #ccc;
  background-color: #f6f6f6;
  .gird {
    width: 480px;
    height: 50px;
    margin-left: 30px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .input {
      div {
        position: absolute;
        top: 0;
        div {
          label {
            background-color: #f6f6f6;
          }
          input {
            margin-top: 10px;
          }
        }
      }
    }
    .op {
      &::before {
        content: '';
        position: absolute;
        ${Block('0', '0', '')}
        top: 12px;
        right: 20px;
        border-top: 6px solid #333;
        border-right: 6px solid transparent;
        border-left: 6px solid transparent;
      }
    }
    .op1 {
      margin-right: 15px;
    }
  }
  p {
    padding: 10px 0 0 10px;
  }
`;
const InfoProducts = styled.div`
  width: 500px;
  margin: 10px 0 0 20px;
  margin-bottom: 10px;
  background-color: white;
  /* text-align: center; */
  .boder {
    border-bottom: 2px solid #f2f2f2;
  }
  .date {
    .none {
      display: none;
      transition: all 0.4s ease;
    }
    display: block;
    padding: 3px;
    color: red;
    justify-content: space-between;
    span {
      line-height: 33px;
      span {
        margin-left: 120px;
        cursor: pointer;
        :hover {
          color: red;
        }
      }
    }
    div {
      display: block;
      width: 97%;
      cursor: pointer;
      position: relative;
      .gird {
        /* position: absolute; */
        display: flex;
        transition: all 0.4s ease;
        margin: 0;
        height: 70px;

        .show {
          display: none;
        }
      }
    }
  }
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
`;
const Date = styled.div``;
const Address = styled.div``;
const Error = styled.div`
  width: 100%;
  text-align: center;
  color: red;
  padding: 5px;
`;
const Discount = styled.div`
  margin: 10px 0;
  transition: all 1s ease;
  div {
    cursor: pointer;
    span {
      background-color: teal;
      display: block;
      color: white;
      width: 200px;
      line-height: 30px;
      padding: 10px;
      text-align: center;
      margin-bottom: 15px;
    }
    .qr {
      padding-top: 8px;
    }
  }
  .show {
    display: none;
  }
`;
const TotalsProducts = styled.div`
  border-top: 1px solid #ccc;
  display: flex;
  padding-top: 10px;
  font-weight: 700;
  justify-content: space-around;
`;
const Pri = styled.div`
  text-align: center;
`;
const Item = styled.div`
  display: block;
  width: 200px;
  border: 1px solid teal;
  margin-top: 10px;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  text-align: center;
  .show {
    display: none;
  }
  input {
    width: 180px;
    height: 24px;
    border: none;
    background-color: #f6f6f6;
  }
`;
const Filters = styled.div`
  position: absolute;
  background-color: #f6f6f6;
  width: 250px;
  height: 220px;
  display: block;
  top: 50px;
  transition: all 0.1s ease;
  z-index: 999;
  left: 0;
  box-shadow: 0 2px 20px rgb(0 0 0 / 50%);
  .close {
    height: 54px;
  }
`;
const Top = styled.div`
  height: 20px;
  width: 100%;
  ${Flex('center', 'space-around')}

  div {
    margin-left: 210px;
    margin-top: 4px;
    .text {
      font-size: 12px;
      width: 60px;
    }
    :hover {
      color: red;
    }
  }
  padding-left: 10px;
`;
const Bottom = styled.div`
  overflow-y: scroll;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  ::before {
    content: '';
    position: absolute;
    ${Block('0', '0', '')}
    top: -10px;
    left: 100px;
    border-bottom: 10px solid #e3f2fd;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
  }
  div {
    color: #288ad6;
    height: 40px;
    padding: 5px;
    transition: all 0.1s ease;
    margin: 5px;
    font-size: 14px;
    :hover {
      color: white;
      background-color: #288ad6;
    }
  }
`;
const Filters1 = styled.div`
  position: absolute;
  background-color: #f8f9fa;
  display: block;
  top: 50px;
  height: 145px;
  color: black;
  overflow-y: scroll;
  margin-top: -40px;
  border-radius: 8px;
  div {
    div {
      :hover {
        color: teal;
        background-color: white;
      }
    }
  }
  span {
    margin-left: 100px;
  }
`;
