import React from 'react';
import { Block, Detail, Flex } from 'responsive';
import styled from 'styled-components';
import Bg5 from '../img/pr5.jpg';
import Bg1 from '../img/prd1.jpg';
import Bg2 from '../img/pr2.jpg';
import Bg3 from '../img/pr3.jpg';
import Bg4 from '../img/pr4.jpg';
import PrimaryButton from './PrimaryButton';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { addCart } from 'features/cart/ApiCart';
import { useLocation, useNavigate } from 'react-router-dom';
import { publicRequest } from 'requestMethods';

export const ProductDetail = ({ product }: any) => {
  const [s, setS] = React.useState<string>(Bg4);
  const [Quantity, setQuantity] = React.useState<number>(1);
  const [colors, setColor] = React.useState<String>('');
  const [rams, setRam] = React.useState<String>('');
  const dispatch = useDispatch();
  const User: any = useSelector((state: RootStateOrAny) => state.auth.currentUser);
  const Id = User ? User._id : '';
  const location = useLocation();
  const history = useNavigate();

  const product_Id = location.pathname.split('/')[2];
  const handleClick = () => {
    addCart({ userId: Id, products: [{ productId: product_Id, quantity: Quantity }] }, dispatch);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClickDetail = async (c: any, r: any) => {
    setColor(c);
    setRam(r);
    try {
      const res: any = await publicRequest.get(`/products/search?color=${c}&ram=${r}`);
      // console.log(res.data);
      history(`/product/${res.data[0]._id}`);
    } catch (error) {}
  };

  return (
    <Container>
      <Left>
        <div>
          <Img alt="" src={s} />
        </div>
        <span>
          <b>Xem tất cả hình ảnh</b> (10/12)
        </span>
        <ListImg>
          <div>
            <Item alt="" src={Bg1} onMouseEnter={() => setS(Bg1)} />
          </div>
          <div>
            <Item alt="" src={Bg2} onMouseEnter={() => setS(Bg2)} />
          </div>
          <div>
            <Item alt="" src={Bg3} onMouseEnter={() => setS(Bg3)} />
          </div>
          <div>
            <Item alt="" src={Bg4} onMouseEnter={() => setS(Bg4)} />
          </div>
          <div>
            <Item alt="" src={Bg5} onMouseEnter={() => setS(Bg5)} />
          </div>
        </ListImg>
        <C>
          <div className="c">
            <ImgIcon>
              <Icon1 />
            </ImgIcon>
            <span>
              Hư gì đổi nấy 12 tháng tại 3126 siêu thị toàn quốc (miễn phí tháng đầu)
              <b> Xem chi tiết</b>
            </span>
          </div>
          <div className="c">
            <ImgIcon>
              <Icon2 />
            </ImgIcon>
            <span>
              Bảo hành chính hãng điện thoại 1 năm tại các trung tâm bảo hành hãng
              <b> Xem địa chỉ bảo hành</b>
            </span>
          </div>
          <div className="c">
            <ImgIcon>
              <Icon3 />
            </ImgIcon>
            <span>
              Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C
              <b> Xem thêm đi</b>
            </span>
          </div>
        </C>
      </Left>
      <Right>
        <Color>
          <div
            className={
              colors === ''
                ? product.color === 'black'
                  ? 'active'
                  : ''
                : colors === 'black'
                ? 'active'
                : ''
            }
            onClick={() => handleClickDetail('black', rams)}
          >
            Đen
          </div>
          <div
            className={
              colors === ''
                ? product.color === 'white'
                  ? 'active'
                  : ''
                : colors === 'white'
                ? 'active'
                : ''
            }
            onClick={() => handleClickDetail('white', rams)}
          >
            Trắng
          </div>
          <div
            className={
              colors === ''
                ? product.color === 'red'
                  ? 'active'
                  : ''
                : colors === 'red'
                ? 'active'
                : ''
            }
            onClick={() => handleClickDetail('red', rams)}
          >
            Đỏ
          </div>
          <div
            className={
              colors === ''
                ? product.color === 'aqua'
                  ? 'active'
                  : ''
                : colors === 'aqua'
                ? 'active'
                : ''
            }
            onClick={() => handleClickDetail('aqua', rams)}
          >
            Xanh
          </div>
        </Color>
        <Color>
          <div
            className={
              rams === '' ? (product.ram === 'S' ? 'active' : '') : rams === 'S' ? 'active' : ''
            }
            onClick={() => handleClickDetail(colors, 'S')}
          >
            32GB
          </div>
          <div
            className={
              rams === '' ? (product.ram === 'M' ? 'active' : '') : rams === 'M' ? 'active' : ''
            }
            onClick={() => handleClickDetail(colors, 'M')}
          >
            64GB
          </div>
          <div
            className={
              rams === '' ? (product.ram === 'L' ? 'active' : '') : rams === 'L' ? 'active' : ''
            }
            onClick={() => handleClickDetail(colors, 'L')}
          >
            128GB
          </div>
        </Color>
        <Amount>
          <b>Số Lượng: </b>
          <div onClick={() => setQuantity(Quantity - 1)}>-</div>
          <div>{Quantity}</div>
          <div onClick={() => setQuantity(Quantity + 1)}>+</div>
        </Amount>
        <Price>
          <Count>
            {product ? product.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : 0}
            <u>đ</u>
          </Count>
          <Dec>34% Giảm</Dec>
        </Price>
        <Promotion>
          <div className="colum">
            <h4>Khuyến mãi</h4>
            <span>Giá và khuyến mãi dự kiến áp dụng đến 23:59 11/06</span>
          </div>
          <div className="line">
            <div>
              <span>1</span>
              <h5>
                Giảm giá 50% gói bào hành mở rộng thêm 1 năm (chính hãng) <b> Xem chi tiết</b>
              </h5>
            </div>
            <div>
              <span>2</span>
              <h5>
                Giảm đến 1,500,000đ khi Thu cũ Đổi mới (tùy model máy cũ; không áp dụng kèm giảm giá
                qua VNPAY, Moca)<b> Xem chi tiết</b>
              </h5>
            </div>
            <div>
              <span>3</span>
              <h5>
                Giảm 50% giá gói cước 1 năm (Vina350/Vina500) cho Sim VinaPhone trả sau (Trị giá đến
                3 triệu)<b> Xem chi tiết</b>
              </h5>
            </div>
            <div>
              <span>4</span>
              <h5>
                Nhập mã TGDD giảm 5% tối đa 400.000đ cho đơn hàng từ 500.000đ trở lên khi thanh toán
                qua Ví Moca trên ứng dụng Grab<b> Xem chi tiết</b>
              </h5>
            </div>
          </div>
          <div className="bot">
            <b>(*) </b> Giá hoặc khuyến mãi không áp dụng trả góp lãi suất đặc biệt (0%, 0.5%, 1%)
          </div>
        </Promotion>
        <Input>
          <div>
            <PrimaryButton onClick={handleClick} title="Thêm vào giỏ hàng" primary />
            <PrimaryButton onClick={handleClick} title="Mua Ngay" primary />
          </div>
        </Input>
      </Right>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  margin-top: 10px;
  min-width: 820px;
  border: 1px solid #ccc;
`;
const Left = styled.div`
  flex: 3;
  ${Block('', '', 'white')}
  padding: 15px;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  ${Block('', '', '#ffff')}
  padding: 20px 35px 0 20px;
`;
const Img = styled.img`
  background-size: cover;
  ${Block('477px', '440px', '')}
  margin-bottom:15px;
`;
const ListImg = styled.div`
  ${Flex('center', 'center')}
  height: 80px;
  gap: 10px;
  div {
    border: 2px solid #f8f9fa;
    border-radius: 2px;
  }
  margin-top: 15px;
`;
const Item = styled.img`
  height: 54px;
  padding: 10px 5px 5px;
  line-height: auto;
`;
const C = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  .c {
    padding: 5px;
    margin-top: 10px;
    span {
      margin-left: 10px;
    }
  }
`;
const Price = styled.div`
  margin-top: 5px;
  ${Block('100%', '50px', 'white')}
  display: flex;
`;
const Count = styled.h5`
  padding: 0 15px;
  font-size: 18px;
  line-height: 50px;
  position: relative;
  color: red;
`;
const Dec = styled.span`
  display: block;
  text-align: center;
  border-radius: 7px;
  padding: 0 4px;
  color: white;
  margin-top: 10px;
  margin-left: 15px;
  ${Block('80px', '20px', '#00aeff')}
`;
const Promotion = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  margin-top: 15px;
  div {
    display: flex;
    padding: 10px;
  }
  .line {
    display: block;
    border-bottom: 1px solid #f0f0f0;
    span {
      background-color: #00aeff;
      width: 20px;
      height: 20px;
      padding: 5px;
      line-height: 10px;
      text-align: center;
      border-radius: 50%;
    }
    h5 {
      margin-left: 13px;
      b {
        color: #00aeff;
      }
    }
  }
  .bot {
    height: 60px;
    padding: 8px 10px 10px;
    b {
      color: red;
    }
  }
  .colum {
    display: block;
    background-color: #f6f6f6;
    padding: 8px 10px;
    span {
      font-size: 12px;
    }
  }
`;
const Color = styled.div`
  ${Block('', '42px', 'white')}
  display: flex;
  padding: 4px;
  margin-top: 5px;
  .active {
    border: 1px solid #288ad6;
    font-weight: 500;
    color: #288ad6;
  }
  div {
    border-radius: 2px;
    margin: 0px 10px;
    ${Block('70px', '38px', '')}
    line-height: 38px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    border: 1px solid #f6f6f6;
  }
  span {
    margin-right: 44px;
    line-height: 34px;
    padding-left: 4px;
  }
`;

const Input = styled.div`
  display: block;
  text-align: center;
  margin: 20px 0;
`;
const Amount = styled.div`
  display: flex;
  margin-top: 24px;
  div {
    font-size: 22px;
    border: 1px solid #ccc;
    padding: 5px 12px;
  }
  b {
    line-height: 40px;
    margin-right: 20px;
  }
`;
const ImgIcon = styled.div`
  vertical-align: middle;
  display: inline-block;
`;
const Icon1 = styled.div`
  height: 32px;
  width: 32px;
  ${Detail({
    backgroundPosition: '0 -35px',
  })}
`;
const Icon2 = styled.div`
  height: 32px;
  width: 32px;
  ${Detail({
    backgroundPosition: '-105px -35px',
  })}
`;
const Icon3 = styled.div`
  height: 32px;
  width: 32px;
  ${Detail({
    backgroundPosition: '-70px -35px',
  })}
`;
