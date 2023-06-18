import React from 'react';
import { Block, Flex, ipad } from 'responsive';
import styled from 'styled-components';
import Noti1 from '../img/notify1.jpg';
import Noti2 from '../img/notify2.jpg';
import Noti4 from '../img/notify4.png';
import Noti5 from '../img/notify5.jpg';
import app from '../img/app.jpg';
import appiphone from '../img/appiphons.png';

interface Props {}

export const Notify = (props: Props) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <p className="cn">24H CÔNG NGHỆ</p>

          <NotiRight>
            <div>
              <img alt="" src={Noti1} />
              <p>
                Khám phá TOP 4 laptop HP chuyển đồ họa tại Thế Giới Di Động, hội tụ những lựa chọn..
                <br />
                <span>1 giờ trước</span>
              </p>
            </div>
            <div>
              <img alt="" src={Noti2} />
              <p>
                Khám phá TOP 4 laptop HP chuyển đồ họa tại Thế Giới Di Động, hội tụ những lựa chọn..
                <br />
                <span>1 giờ trước</span>
              </p>
            </div>
            <div>
              <img alt="" src={Noti4} />
              <p>
                Khám phá TOP 4 laptop HP chuyển đồ họa tại Thế Giới Di Động, hội tụ những lựa chọn..
                <br />
                <span>1 giờ trước</span>
              </p>
            </div>
            <div>
              <img alt="" src={Noti5} />
              <p>
                Khám phá TOP 4 laptop HP chuyển đồ họa tại Thế Giới Di Động, hội tụ những lựa chọn..
                <br />
                <span>1 giờ trước</span>
              </p>
            </div>
          </NotiRight>
        </Left>
        <Right>
          <div>
            <p className="cn">GAME,ỨNG DỤNG</p>
            <img alt="" src={app} />
            <C>
              <img alt="" src={appiphone} />
              <h3>
                VSCO: Chỉnh sửa Ảnh và Video
                <br />
                <p>Chup & hình ảnh</p>
              </h3>
            </C>
            <li>Cách cài đặt và sử dụng VSCO trên máy tính đơn giản</li>
            <li>3 ứng dụng chụp ảnh RAW trên điện thoại iphone</li>
          </div>
        </Right>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  ${Flex('', 'center')}
  background-color: #fff;
  min-width: 820px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1200px;
  padding-bottom: 10px;
  .cn {
    margin-bottom: 5px;
    font-weight: 700;
    line-height: 20px;
    padding: 6px;
  }
`;
const Right = styled.div`
  display: flex;
  padding-bottom: 10px;
  div {
    padding: 5px;
  }
  img {
    width: 200px;
  }

  li {
    color: #448aff;
    font-size: 13px;
    list-style: inside;
    height: 5px;
    min-width: 170px;
    margin-top: 27px;
  }
`;
const Left = styled.div`
  ${Block('', '330px', '#fff')};
`;

const NotiRight = styled.div`
  display: grid;
  max-width: 720px;
  gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin-left: 10px;
  div {
    ${Block('300px', '100px', '')};
    margin-bottom: 10px;
    display: flex;
    cursor: pointer;
    img {
      border-radius: 6px;
    }
    p {
      padding-left: 5px;
      font-size: 12px;
      span {
        line-height: 24px;
        font-size: 10px;
        font-weight: 300;
      }
    }
    &:hover {
      color: #448aff;
    }
  }
`;
const C = styled.div`
  display: flex;
  cursor: pointer;
  img {
    max-width: 40px;
    max-height: 40px;
  }
  li {
    height: 60px;
  }
  h3 {
    font-size: 16px;
    margin-top: 6px;
    p {
      font-size: 14px;
      line-height: 22px;
      position: relative;
      padding-left: 60px;
      font-weight: 300;
      ::before {
        position: absolute;
        content: 'Miễn phí';
        ${Block('56px', '16px', '#07a358')};
        font-size: 12px;
        left: 0px;
        top: 3px;
        text-align: center;
        border-radius: 4px;
        line-height: 16px;
      }
    }
  }
`;
