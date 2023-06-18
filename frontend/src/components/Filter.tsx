/* eslint-disable no-useless-concat */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Block, Flex, mobile } from 'responsive';
import styled from 'styled-components';
import { ProductsList } from './Products';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import PrimaryButton from './PrimaryButton';
export const Filter = () => {
  const [offset, setOffset] = React.useState<boolean>(false);
  const [count, setCount] = React.useState<boolean>(true);
  const [countPro, setCountPro] = React.useState<number>(0);
  const [page, setPage] = React.useState<number>(1);
  const [tn, setTn] = React.useState<Array<string>>([]);
  const [hn, setHn] = React.useState<Array<string>>([]);
  const [color, setColor] = React.useState<Array<string>>([]);
  const [ram, setRam] = React.useState<Array<string>>([]);
  const [loai, setLoai] = React.useState<Array<string>>([]);
  const [gia, setGia] = React.useState<Array<string>>([]);
  const [hang, setHang] = React.useState<Array<string>>([]);
  const [conCats, setConCat] = React.useState<Array<any>>([]);
  const [sort, setSort] = React.useState<string>('');
  const [show, setShow] = React.useState<boolean>(false);
  const [fill, setFill] = React.useState<Object>({});
  const show0Ref = React.useRef<HTMLDivElement | null>(null);
  const show1Ref = React.useRef<HTMLDivElement | null>(null);
  const show2Ref = React.useRef<HTMLDivElement | null>(null);
  const show3Ref = React.useRef<HTMLDivElement | null>(null);
  const show4Ref = React.useRef<HTMLDivElement | null>(null);
  const show5Ref = React.useRef<HTMLDivElement | null>(null);
  const show6Ref = React.useRef<HTMLDivElement | null>(null);
  const show7Ref = React.useRef<HTMLDivElement | null>(null);
  const ArrayOnClickTn = [
    ['Ho-tro-5g', setTn, tn, 'h1', 'Hỗ trợ 5g'],
    ['Bao-mat-khuon-mat', setTn, tn, 'h2', 'B.M khuônmặt'],
    ['Bao-mat-van-tay', setTn, tn, 'h3', 'Bảo mật vân tay'],
    ['Sac-khong-day', setTn, tn, 'h4', 'Sạc không dây'],
  ];
  const ArrayOnClickHn = [
    ['Choi-game', setHn, hn, 'a1', 'Chơi game'],
    ['Pin-khung', setHn, hn, 'a2', 'Pin khủng'],
    ['Sạc-pin-nhanh', setHn, hn, 'a3', 'Sạc pin nhanh'],
  ];
  const ArrayOnClickLoai = [
    ['Pho-Bien', setLoai, loai, 'b1', 'Phổ Biến'],
    ['Thong-Dung', setLoai, loai, 'b2', 'Thông Dụng'],
    ['Ban-Chay', setLoai, loai, 'b3', 'Bán Chạy'],
  ];
  const ArrayOnClickGia = [
    ['count<=2000000', setGia, gia, 'c1', 'Dưới 2 triệu'],
    ['count>=2000000,count<=4000000', setGia, gia, 'c2', 'Từ 2 - 4 triệu'],
    ['count>=4000000,count<=7000000', setGia, gia, 'c3', 'Từ 4 - 7 triệu'],
    ['count>=7000000,count<=13000000', setGia, gia, 'c4', 'Từ 7 - 13 triệu'],
    ['count>=13000000', setGia, gia, 'c5', 'Trên 13 triệu'],
  ];
  const ArrayOnClickHang = [
    ['iphone', setHang, hang, 'd1', 'iPhone'],
    ['samsum', setHang, hang, 'd2', 'SAMSUM'],
    ['oppo', setHang, hang, 'd3', 'OPPO'],
    ['realme', setHang, hang, 'd4', 'Realme'],
    ['xiaomi', setHang, hang, 'd5', 'xiaomi'],
    ['nokia', setHang, hang, 'd6', 'NOKIA'],
  ];
  const ArrayOnClickColor = [
    ['white', setColor, color, 'e1', 'Trắng'],
    ['black', setColor, color, 'e2', 'Đen'],
    ['red', setColor, color, 'e3', 'Đỏ'],
    ['aqua', setColor, color, 'e4', 'Xanh'],
  ];
  const ArrayOnClickRam = [
    ['S', setRam, ram, 'f1', 'Ram: S'],
    ['M', setRam, ram, 'f2', 'Ram: M'],
    ['L', setRam, ram, 'f3', 'Ram: L'],
    ['XL', setRam, ram, 'f4', 'Ram: XL'],
  ];
  useEffect(() => {
    window.onscroll = () => {
      // console.log(window.pageYOffset);
      if (window.pageYOffset > 88) {
        setOffset(true);
      } else {
        setOffset(false);
      }
    };
    return () => {};
  }, []);
  useEffect(() => {
    setFill({
      hn,
      tn,
      hang,
      gia,
      loai,
      color,
      ram,
    });
  }, [hn, tn, hang, gia, loai, color, ram]);
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const arr = [
    show1Ref.current!,
    show2Ref.current!,
    show3Ref.current!,
    show4Ref.current!,
    show5Ref.current!,
    show6Ref.current!,
    show7Ref.current!,
    show0Ref.current!,
  ];
  const handleChangeTn1 = ([e, set, d, h, t]: any) => {
    let x = document.getElementById(h);
    // console.log(d);
    if (!d?.includes(e)) {
      if (h.length === 2) {
        x!.classList.add('none');
        const str = '1' + `${h}`;
        let x1 = document.getElementById(str);
        x1!.classList.add('none');
      } else if (h.length === 3) {
        x!.classList.add('none');
        const str1 = h.slice(1, 3);
        let x2 = document.getElementById(str1);
        x2!.classList.add('none');
      }
      set((prev: any) => [...prev, e]);
      setConCat((prev: any) => [...prev, [e, h, t]]);
    } else {
      set((prev: any) => [...prev].filter((item: any) => item !== e));
      setConCat((prev: any) => [...prev].filter((item: any) => item[0] !== e));
      if (h.length === 2) {
        x!.classList.remove('none');
        const str = '1' + `${h}`;
        let x1 = document.getElementById(str);
        x1!.classList.remove('none');
      } else if (h.length === 3) {
        x!.classList.remove('none');
        const str1 = h.slice(1, 3);
        let x2 = document.getElementById(str1);
        x2!.classList.remove('none');
      }
    }
  };
  const handleChangeTn2 = ([e, set, d, h, t]: any) => {
    h = '1' + h;
    handleChangeTn1([e, set, d, h, t]);
  };
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
  };

  const handleClickUncheck = (set: any, tn: any, i: number, h: string, n: number) => {
    // console.log(tn);
    if (h === 'c') {
      set('');
    } else if (set) {
      let v;
      // console.log(set);
      for (v = 1; v <= n; v++) {
        let c = '1' + h + `${v}`;
        let x = document.getElementById(c);
        x!.classList.remove('none');
      }

      for (v = 1; v <= n; v++) {
        let c = h + `${v}`;
        let x = document.getElementById(c);
        x!.classList.remove('none');
      }
      const setC = conCats?.filter((item) => !tn?.includes(item[0]));
      setConCat(setC);
      set([]);
    }
    arr[i].classList.add('show');
    setShow(false);
    setCount(false);
  };
  const handleClickCheck = (i: number) => {
    arr[i].classList.add('show');
    setShow(false);
    setCount(false);
    setPage(1);
  };
  const handleClickPage = () => {
    setPage(page + 1);
    setCount(false);
  };
  const handleClickConcat = ([e, h, t]: any) => {
    let s;
    let a;
    if (h.length === 2) {
      s = h.slice(0, 1);
      a = h.slice(1, 2);
      if (s === 'h') {
        console.log(ArrayOnClickTn[a - 1]);
        handleChangeTn1(ArrayOnClickTn[a - 1]);
      } else if (s === 'a') {
        handleChangeTn1(ArrayOnClickHn[a - 1]);
      } else if (s === 'b') {
        handleChangeTn1(ArrayOnClickLoai[a - 1]);
      } else if (s === 'c') {
        handleChangeTn1(ArrayOnClickGia[a - 1]);
      } else if (s === 'd') {
        handleChangeTn1(ArrayOnClickHang[a - 1]);
      } else if (s === 'e') {
        handleChangeTn1(ArrayOnClickColor[a - 1]);
      } else if (s === 'f') {
        handleChangeTn1(ArrayOnClickRam[a - 1]);
      }
    } else if (h.length === 3) {
      s = h.slice(1, 2);
      a = h.slice(2, 3);
      if (s === 'h') {
        handleChangeTn2(ArrayOnClickTn[a - 1]);
      } else if (s === 'a') {
        handleChangeTn2(ArrayOnClickHn[a - 1]);
      } else if (s === 'b') {
        handleChangeTn2(ArrayOnClickLoai[a - 1]);
      } else if (s === 'c') {
        handleChangeTn2(ArrayOnClickGia[a - 1]);
      } else if (s === 'd') {
        handleChangeTn2(ArrayOnClickHang[a - 1]);
      } else if (s === 'e') {
        handleChangeTn2(ArrayOnClickColor[a - 1]);
      } else if (s === 'f') {
        handleChangeTn1(ArrayOnClickRam[a - 1]);
      }
    }
  };

  const handleClickUncheckConCat = () => {
    conCats?.map((x: any) => {
      handleClickConcat(x);
    });
    handleClickFilter('hidden', 7);
    setConCat([]);
    setTn([]);
    setHn([]);
    setLoai([]);
    setGia([]);
    setHang([]);
    setColor([]);
    setRam([]);
    setShow(false);
    setCount(false);
  };
  return (
    <>
      <Container>
        <Wrapper className={offset === true ? 'onm' : ''}>
          <Item
            onClick={() => handleClickFilter(show === true ? 'not' : 'show', 7)}
            className={conCats?.length === 0 ? '' : 'active'}
          >
            <span>Lọc</span>
            <FilterAltIcon className="icon" />
            {conCats.length === 0 ? '' : <span className="fill">{conCats.length}</span>}
            <Filters className="show" ref={show0Ref}>
              <Top>
                <h5 className="iconClose" onClick={() => handleClickFilter('hidden', 7)}>
                  <CloseIcon />
                </h5>
                {conCats?.length > 0 && (
                  <Selected>
                    <h4>Đã chọn: </h4>
                    {conCats?.map((x: any, i: number) => {
                      return (
                        <div key={i}>
                          <span onClick={() => handleClickConcat(x)}>
                            {x[2]} <CloseIcon className="h" />
                          </span>
                        </div>
                      );
                    })}
                  </Selected>
                )}
                {/* <hr /> */}
                <Company>
                  <h4>Hảng: </h4>
                  <div>
                    {ArrayOnClickHang?.map((item: any, index: number) => (
                      <span
                        key={index}
                        id={'1d' + (index + 1)}
                        onClick={() => handleChangeTn1(ArrayOnClickHang[index])}
                      >
                        {item[4]}
                      </span>
                    ))}
                  </div>
                </Company>
              </Top>
              <Bottom>
                <div>
                  <div>
                    <h4>Tính năng</h4>
                    <div>
                      {ArrayOnClickTn?.map((item: any, index: number) => (
                        <span
                          key={index}
                          id={'1h' + (index + 1)}
                          onClick={() => handleChangeTn1(ArrayOnClickTn[index])}
                        >
                          {item[4]}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4>Hiệu năng</h4>
                    <div>
                      {ArrayOnClickHn?.map((item: any, index: number) => (
                        <span
                          key={index}
                          id={'1a' + (index + 1)}
                          onClick={() => handleChangeTn1(ArrayOnClickHn[index])}
                        >
                          {item[4]}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4>Loại điên thoại</h4>
                    <div>
                      {ArrayOnClickLoai?.map((item: any, index: number) => (
                        <span
                          key={index}
                          id={'1b' + (index + 1)}
                          onClick={() => handleChangeTn1(ArrayOnClickLoai[index])}
                        >
                          {item[4]}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4>Giá</h4>
                    <div>
                      {ArrayOnClickGia?.map((item: any, index: number) => (
                        <span
                          key={index}
                          id={'1c' + (index + 1)}
                          onClick={() => handleChangeTn1(ArrayOnClickGia[index])}
                        >
                          {item[4]}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4>Màu Sắc</h4>
                    <div>
                      {ArrayOnClickColor?.map((item: any, index: number) => (
                        <span
                          key={index}
                          id={'1e' + (index + 1)}
                          onClick={() => handleChangeTn1(ArrayOnClickColor[index])}
                        >
                          {item[4]}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4>Bộ Nhớ</h4>
                    <div>
                      {ArrayOnClickRam?.map((item: any, index: number) => (
                        <span
                          key={index}
                          id={'1f' + (index + 1)}
                          onClick={() => handleChangeTn1(ArrayOnClickRam[index])}
                        >
                          {item[4]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Bottom>
              <div className="be">
                <p onClick={() => handleClickUncheckConCat()}>Bỏ chọn</p>
                <p onClick={() => handleClickCheck(7)}>Xem kết quả: {countPro}</p>
              </div>
            </Filters>
          </Item>
          <Item
            onClick={() => handleClickFilter(show === true ? 'not' : 'show', 0)}
            className={tn.length === 0 ? '' : 'active'}
          >
            Tính năng
            <FilterShow ref={show1Ref} className="show">
              <div className="gridd">
                <h5> </h5>
                <h5 onClick={() => handleClickFilter('hidden', 0)}>
                  <CloseIcon />
                </h5>
                {ArrayOnClickTn?.map((item: any, index: number) => (
                  <span
                    key={index}
                    id={'h' + (index + 1)}
                    onClick={() => handleChangeTn1(ArrayOnClickTn[index])}
                  >
                    {item[4]}
                  </span>
                ))}
              </div>
              <div className="be">
                <p onClick={() => handleClickUncheck(setTn, tn, 0, 'h', 4)}>Bỏ chọn</p>
                <p onClick={() => handleClickCheck(0)}>Xem kết quả: {countPro}</p>
              </div>
            </FilterShow>
          </Item>
          <Item
            className={hn.length === 0 ? '' : 'active'}
            onClick={() => handleClickFilter(show === true ? 'not' : 'show', 1)}
          >
            Hiệu năng
            <FilterShow ref={show2Ref} className="show">
              <div className="gridd">
                <h5> </h5>
                <h5 onClick={() => handleClickFilter('hidden', 1)}>
                  <CloseIcon />
                </h5>
                {ArrayOnClickHn?.map((item: any, index: number) => (
                  <span
                    key={index}
                    id={'a' + (index + 1)}
                    onClick={() => handleChangeTn1(ArrayOnClickHn[index])}
                  >
                    {item[4]}
                  </span>
                ))}
              </div>
              <div className="be">
                <p onClick={() => handleClickUncheck(setHn, hn, 1, 'a', 3)}>Bỏ chọn</p>
                <p onClick={() => handleClickCheck(1)}>Xem kết quả: {countPro}</p>
              </div>
            </FilterShow>
          </Item>
          <Item
            className={loai.length === 0 ? '' : 'active'}
            onClick={() => handleClickFilter(show === true ? 'not' : 'show', 2)}
          >
            Loại điện thoại
            <FilterShow ref={show3Ref} className="show">
              <div className="gridd">
                <h5> </h5>
                <h5 onClick={() => handleClickFilter('hidden', 2)}>
                  <CloseIcon />
                </h5>
                {ArrayOnClickLoai?.map((item: any, index: number) => (
                  <span
                    key={index}
                    id={'b' + (index + 1)}
                    onClick={() => handleChangeTn1(ArrayOnClickLoai[index])}
                  >
                    {item[4]}
                  </span>
                ))}
              </div>
              <div className="be">
                <p onClick={() => handleClickUncheck(setLoai, loai, 2, 'b', 3)}>Bỏ chọn</p>
                <p onClick={() => handleClickCheck(2)}>Xem kết quả: {countPro}</p>
              </div>
            </FilterShow>
          </Item>
          <Item
            className={gia.length === 0 ? '' : 'active'}
            onClick={() => handleClickFilter(show === true ? 'not' : 'show', 3)}
          >
            Giá
            <FilterShow ref={show4Ref} className="show">
              <div className="gridd">
                <h5> </h5>
                <h5 onClick={() => handleClickFilter('hidden', 3)}>
                  <CloseIcon />
                </h5>
                {ArrayOnClickGia?.map((item: any, index: number) => (
                  <span
                    key={index}
                    id={'c' + (index + 1)}
                    onClick={() => handleChangeTn1(ArrayOnClickGia[index])}
                  >
                    {item[4]}
                  </span>
                ))}
              </div>
              <div className="be">
                <p onClick={() => handleClickUncheck(setGia, gia, 3, 'c', 0)}>Bỏ chọn</p>
                <p onClick={() => handleClickCheck(3)}>Xem kết quả: {countPro}</p>
              </div>
            </FilterShow>
          </Item>
          <Item
            className={hang.length === 0 ? '' : 'active'}
            onClick={() => handleClickFilter(show === true ? 'not' : 'show', 4)}
          >
            Hãng
            <FilterShow ref={show5Ref} className="show">
              <div className="gridd">
                <h5> </h5>
                <h5 onClick={() => handleClickFilter('hidden', 4)}>
                  <CloseIcon />
                </h5>
                {ArrayOnClickHang?.map((item: any, index: number) => (
                  <span
                    key={index}
                    id={'d' + (index + 1)}
                    onClick={() => handleChangeTn1(ArrayOnClickHang[index])}
                  >
                    {item[4]}
                  </span>
                ))}
              </div>
              <div className="be">
                <p onClick={() => handleClickUncheck(setHang, hang, 4, 'd', 6)}>Bỏ chọn</p>
                <p onClick={() => handleClickCheck(4)}>Xem kết quả: {countPro}</p>
              </div>
            </FilterShow>
          </Item>
          <Item
            className={color.length === 0 ? '' : 'active'}
            onClick={() => handleClickFilter(show === true ? 'not' : 'show', 5)}
          >
            Màu
            <FilterShow ref={show6Ref} className="show">
              <div className="gridd">
                <h5> </h5>
                <h5 onClick={() => handleClickFilter('hidden', 5)}>
                  <CloseIcon />
                </h5>
                {ArrayOnClickColor?.map((item: any, index: number) => (
                  <span
                    key={index}
                    id={'e' + (index + 1)}
                    onClick={() => handleChangeTn1(ArrayOnClickColor[index])}
                  >
                    {item[4]}
                  </span>
                ))}
              </div>
              <div className="be">
                <p onClick={() => handleClickUncheck(setColor, color, 5, 'e', 4)}>Bỏ chọn</p>
                <p onClick={() => handleClickCheck(5)}>Xem kết quả: {countPro}</p>
              </div>
            </FilterShow>
          </Item>
          <Item
            className={ram.length === 0 ? '' : 'active'}
            onClick={() => handleClickFilter(show === true ? 'not' : 'show', 6)}
          >
            Ram
            <FilterShow ref={show7Ref} className="show">
              <div className="gridd">
                <h5> </h5>
                <h5 onClick={() => handleClickFilter('hidden', 6)}>
                  <CloseIcon />
                </h5>
                {ArrayOnClickRam?.map((item: any, index: number) => (
                  <span
                    key={index}
                    id={'f' + (index + 1)}
                    onClick={() => handleChangeTn1(ArrayOnClickRam[index])}
                  >
                    {item[4]}
                  </span>
                ))}
              </div>
              <div className="be">
                <p onClick={() => handleClickUncheck(setRam, ram, 6, 'f', 4)}>Bỏ chọn</p>
                <p onClick={() => handleClickCheck(6)}>Xem kết quả: {countPro}</p>
              </div>
            </FilterShow>
          </Item>
          <Item>
            <Select name="hao" onChange={(e) => setSort(e.target.value)}>
              <Option disabled>Xếp Theo</Option>
              <Option value="">Nổi bật</Option>
              <Option value="Newest">Mới</Option>
              <Option value="asc">Giá Tăng</Option>
              <Option value="desc">Giá Giảm</Option>
            </Select>
          </Item>
        </Wrapper>
      </Container>
      <ProductsList
        cat={cat}
        sort={sort}
        fill={fill}
        count={count}
        page={page}
        setCount={setCount}
        setCountPro={setCountPro}
      />
      <PB>
        <PrimaryButton
          title={
            countPro - 10 - (page - 1) * 5 <= 0
              ? 'Hết'
              : 'Xem thêm ' +
                `${countPro - 10 - (page - 1) * 5 <= 0 ? 0 : countPro - 10 - (page - 1) * 5}` +
                ' SP'
          }
          onClick={handleClickPage}
          bot
        />
      </PB>
    </>
  );
};
const Container = styled.div`
  ${Flex('center', 'center')}
  ${Block('', '44px', '#ffff')}
  min-width: 820px;
  margin-top: 10px;
  .onm {
    position: fixed;
    top: 0;
    border-radius: 5px;
    ${Block('920px', '44px', '#282828')}
    transition: all 0.2s ease;
    margin: 0;
  }
`;
const PB = styled.div`
  ${Flex('center', 'center')}
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  ${Flex('center', 'space-around')}
  width: 1200px;
  z-index: 10;
  font-weight: 500;
  .active {
    border-color: #2979ff;
  }
`;
const Item = styled.div`
  display: block;
  gap: 10px;
  background: #b8d1ea;
  line-height: 30px;
  font-size: 12px;
  text-align: center;
  padding: 0 24px 0 15px;
  cursor: pointer;
  position: relative;
  border-radius: 3px;
  border: 2px solid transparent;
  .icon {
    font-size: 13px;
  }
  .show {
    display: none;
  }
  .fill {
    ${Block('15px', '15px', 'red')}
    color: white;
    top: 13px;
    right: 19px;
    border-radius: 50%;
    line-height: 19px;
    position: absolute;
    opacity: 0.8;
  }
  :not(:last-child) {
    &::before {
      content: '';
      position: absolute;
      ${Block('0', '0', '')}
      top: 12px;
      right: 8px;
      border-top: 5px solid #333;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
    }
  }
  &:hover {
    border-color: #2979ff;
  }
  span {
    margin-left: 3px;
  }
  select {
    border: none;
    outline: none;
    scroll-behavior: smooth;
  }
`;
const FilterShow = styled.div`
  z-index: 99;
  transition: all 0.4s ease-in-out;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 400px;
  cursor: auto;
  top: 44px;
  right: -3px;
  box-shadow: 0 2px 20px rgb(0 0 0 / 50%);
  :nth-child(2) {
    right: -200px;
  }
  .gridd {
    position: relative;
    ::before {
      content: '';
      position: absolute;
      ${Block('0', '0', '')}
      top: -10px;
      right: 20px;
      border-bottom: 10px solid #1976d2;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
    }
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    height: 100%;
    gap: 1px;
    .none {
      border: 1px solid #288ad6;
      color: #288ad6;
    }
    span {
      cursor: pointer;
      border-radius: 4px;
      ${Block('', '30px', '#fff')}
      margin:10px;
      font-size: 13px;
      &:hover {
        border: 1px solid #288ad6;
        color: #288ad6;
      }
    }
  }
  div {
    display: inline-flex;
    bottom: 0;
    ${Block('100%', '66px', '#E3F2FD')}
    h5 {
      line-height: 20px;
      margin-top: 10px;
      margin-left: 150px;
      width: 40px;
      :hover {
        color: red;
        cursor: pointer;
      }
    }
    position: relative;
    &::before {
      content: '';
      position: absolute;
      ${Block('0', '0', '')}
      top: 0;
      right: 0;
      opacity: 0.3;
      ${Block('100%', '1px', '#ccc')}
    }
    p {
      cursor: pointer;
      border-radius: 4px;
      ${Block('170px', '36px', 'white')}
      margin: 10px 20px 20px 20px;
      line-height: 36px;
      border: 1px solid red;
      color: red;
      &:not(:first-child) {
        margin-left: 20px;
        background-color: #1976d2;
        border: none;
        color: #ffff;
      }
    }
  }
`;
const Select = styled.select`
  background-color: #b8d1ea;
  display: block;
  font-weight: 500;
  height: 30px;
  ${mobile({ margin: '10px 0px' })}
  :last-child {
    margin-left: 10px;
  }
`;
const Option = styled.option`
  font-size: 20px;
  line-height: 40px;
`;
const Filters = styled.div`
  position: absolute;
  ${Block('820px', '540px', '#e3f2fd')}
  overflow-y: scroll;
  display: block;
  top: 44px;
  z-index: 999;
  left: 0;
  box-shadow: 0 2px 20px rgb(0 0 0 / 50%);
  .show {
    display: none;
  }
  .be {
    display: flex;
    margin-left: 220px;
    position: absolute;
  }
  div {
    p {
      cursor: pointer;
      border-radius: 4px;
      ${Block('170px', '36px', 'white')}
      margin: 10px 20px 10px 20px;
      line-height: 36px;
      border: 1px solid red;
      color: red;
      &:not(:first-child) {
        margin-left: 20px;
        background-color: #1976d2;
        border: none;
        color: #ffff;
      }
    }
  }
`;
const Top = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  padding: 0 20px;
  .iconClose {
    margin-left: 740px;
    padding: 5px;
    :hover {
      color: red;
    }
  }
`;
const Bottom = styled.div`
  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 2px;
    margin-left: 3px;
    h4 {
      display: flex;
      padding-left: 4px;
      background-color: teal;
      color: white;
    }
    div {
      display: block;
      /* border: 0.5px solid black; */
      height: 174px;
      width: 97%;
      div {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        height: 0px;
      }
      .none {
        border: 1px solid #288ad6;
        color: #288ad6;
      }
      span {
        margin-top: 4px;
        height: 30px;
        font-size: 14px;
        border: 1px solid none;
        background-color: #fff;
        margin-right: 10px;
        :hover {
          color: #1976d2;
          border: 1px solid #1976d2;
        }
      }
    }
  }
`;
const Selected = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 15px;
  h4 {
    margin-top: -2px;
    width: 50px;
  }
  .h {
    font-size: 16px;
    padding-top: 6px;
  }
  span {
    background-color: #fff;
    padding: 2px 8px;
    margin-top: -6px;
    margin-right: 10px;
    :hover {
      color: #1976d2;
      border: 1px solid #1976d2;
    }
  }
`;
const Company = styled.div`
  margin-bottom: 20px;
  h4 {
    display: flex;
  }
  div {
    display: flex;
    height: 26px;
    line-height: 26px;
    .none {
      border: 1px solid #288ad6;
      color: #288ad6;
    }
    span {
      background-color: #fff;
      padding: 0 20px;
      margin-right: 10px;
      :hover {
        border: 1px solid #1976d2;
      }
    }
  }
`;
