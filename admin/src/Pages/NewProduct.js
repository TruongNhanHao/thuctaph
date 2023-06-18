import { useState } from "react";
import styled from "styled-components";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import { addProduct } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../requestMethods";
import { Cancel, Title } from "@material-ui/icons";

export const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [cate, setCate] = useState([]);
  const [tn, setTn] = useState([]);
  const [hn, setHn] = useState([]);
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(false);
  const { error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.type === "number") {
      setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.valueAsNumber };
      });
    } else {
      setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    }
  };
  const handleChangeTn = (e) => {
    if (!tn.includes(e.target.value)) {
      setTn((prev) => [...prev, e.target.value]);
    } else {
      let i = tn.indexOf(e.target.value);
      tn.splice(i, 1);
      setTn(tn);
    }
  };
  const handleChangeCate = (e) => {
    if (!cate.includes(e.target.value)) {
      setCate((prev) => [...prev, e.target.value]);
    } else {
      let i = cate.indexOf(e.target.value);
      cate.splice(i, 1);
      setCate(cate);
    }
  };
  const handleChangeHn = (e) => {
    if (!hn.includes(e.target.value)) {
      setHn((prev) => [...prev, e.target.value]);
    } else {
      let i = hn.indexOf(e.target.value);
      hn.splice(i, 1);
      setHn(hn);
    }
  };
  // console.log(inputs, hn, tn);
  inputs.categories = cate;
  inputs.tinhnang = tn;
  inputs.hieunang = hn;

  const handleClick = async (e) => {
    e.preventDefault();
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      inputs.img = fileName;
      console.log(inputs);
      try {
        await publicRequest.post("/upload", data);
      } catch (err) {
        setErr(true);
      }
    }
    addProduct(dispatch, inputs);
    window.location.reload();
  };

  let test = [
    {
      title: "Title",
      fn: handleChange,
    },
    {
      title: "Desc",
      fn: handleChange,
    },
    {
      title: "Discount",
      fn: handleChange,
    },
    {
      title: "Count",
      fn: handleChange,
    },
    {
      title: "Evaluate",
      fn: handleChange,
    },
  ];
  return (
    <C>
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <Wrapper>
          <h1>New Product</h1>
          <form>
            <div>
              <label>Image</label>
              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <br />
            {file && (
              <div className="shareImgContainer">
                <img
                  className="shareImg"
                  src={URL.createObjectURL(file)}
                  alt=""
                />
                <Cancel
                  className="shareCancelImg"
                  onClick={() => setFile(undefined)}
                />
              </div>
            )}
            {test?.map((item, index) => (
              <From className="mg">
                <input
                  onChange={handleChange}
                  type="text"
                  id={item.title}
                  className="form__input"
                  autoComplete="off"
                  placeholder=" "
                />
                <label htmlFor={item.title} className="form__label">
                  {item.title}
                </label>
              </From>
            ))}
            <div>
              <label>Categories</label>
              <br />
              <input
                type="checkbox"
                id="c1"
                name="categories"
                value="Ban Chay"
                onChange={handleChangeCate}
              />
              <label htmlFor="c1">Bán chạy</label>
              <br />

              <input
                type="checkbox"
                id="c2"
                name="c2"
                value="Pho Bien"
                onChange={handleChangeCate}
              />
              <label htmlFor="c2">Phổ biến</label>
              <br />

              <input
                type="checkbox"
                id="c3"
                name="c3"
                value="Thong Dung"
                onChange={handleChangeCate}
              />
              <label htmlFor="c3">Thông dụng</label>
              <br />
            </div>
            <hr />
            <div>
              <label>Tính Năng</label>
              <br />
              <input
                type="checkbox"
                id="c1"
                name="c1"
                value="Ho tro 5g"
                onChange={handleChangeTn}
              />
              <label htmlFor="c1">Hỗ trợ 5g</label>
              <br />

              <input
                type="checkbox"
                id="c2"
                name="c2"
                value="Bao mat khuon mat"
                onChange={handleChangeTn}
              />
              <label htmlFor="c2">Bảo mật khuôn mặt</label>
              <br />

              <input
                type="checkbox"
                id="c3"
                name="c3"
                value="Bao mat van tay"
                onChange={handleChangeTn}
              />
              <label htmlFor="c3">Bảo mật vân tay</label>
              <br />
              <input
                type="checkbox"
                id="c4"
                name="c4"
                value="Sac khong day"
                onChange={handleChangeTn}
              />
              <label htmlFor="c4">Sạc không dây</label>
              <br />
            </div>
            <hr />
            <div>
              <label>Hiệu năng</label>
              <br />
              <input
                type="checkbox"
                id="c1"
                name="c1"
                value="Choi game"
                onChange={handleChangeHn}
              />
              <label htmlFor="c1">Chơi Game</label>
              <br />

              <input
                type="checkbox"
                id="c2"
                name="c2"
                value="Pin khung"
                onChange={handleChangeHn}
              />
              <label htmlFor="c2">Pin khủng</label>
              <br />

              <input
                type="checkbox"
                id="c3"
                name="c3"
                value="Sạc pin nhanh"
                onChange={handleChangeHn}
              />
              <label htmlFor="c3">Sạc pin nhanh</label>
              <br />
            </div>
            <div>
              <label>Hãng</label>
              <select name="hang" id="hang" onChange={handleChange}>
                <option value="iphone">Iphone</option>
                <option value="samsum">Samsum</option>
                <option value="oppo">OPPO</option>
                <option value="realme">Realme</option>
                <option value="xiaomi">Xiaomi</option>
                <option value="nokia">NOKIA</option>
              </select>
            </div>
            <div>
              <label>Ram</label>
              <select name="ram" id="ram" onChange={handleChange}>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="S">S</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div>
              <label>Color</label>

              <select name="color" id="ram" onChange={handleChange}>
                <option value="black">Đen</option>
                <option value="white">Trắng</option>
                <option value="red">Đỏ</option>
                <option value="aqua">Xanh</option>
              </select>
            </div>
            <div>
              <label>inStock</label>
              <select id="inStock" name="inStock" onChange={handleChange}>
                <option value="yes">Còn hàng</option>
                <option value="no">Hết hàng</option>
              </select>
            </div>
            <button onClick={handleClick}>Cập Nhật</button>
          </form>
          {error && <h4>Title đã tồn tại</h4>}
          {err && <h4>File tạo không hợp lệ</h4>}
        </Wrapper>
      </div>
    </C>
  );
};
const C = styled.div`
  display: flex;
  width: 100%;
  .listContainer {
    flex: 6;
  }
`;
const Wrapper = styled.div`
  flex: 4;
  margin-left: 20px;
  border: 1px solid black;
  width: 300px;
  .mg {
    margin: 10px 0;
  }
  h1 {
    margin-top: 10px;
    text-align: center;
  }
  h4 {
    color: red;
  }
  form {
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-bottom: 10px;
    div > label {
      color: gray;
      font-weight: 600;
      margin-bottom: 10px;
      padding-right: 24px;
    }

    div > input {
      padding: 10px;
      margin-left: 5px;
    }

    div > select {
      padding: 10px;
      margin-top: 20px;
    }
    button {
      margin-top: 10px;
      padding: 7px 10px;
      border: none;
      border-radius: 10px;
      background-color: darkblue;
      color: white;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
const From = styled.div`
  position: relative;
  width: 260px;
  height: 36px;
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #e1e5ee;
    border-radius: 6px;
    font-family: inherit;
    font-size: inherit;
    outline: none;
    padding: 10px;
    background: none;
    &:hover {
      border-color: teal;
    }
    &:focus {
      border-color: teal;
    }
  }
  label {
    position: absolute;
    left: 10px;
    top: 8px;
    padding: 0 6px;
    cursor: text;
    background-color: white;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  }
  /* .dark {
    label {
      background-color: black;
    }
  } */
  .form__input:focus ~ .form__label,
  .form__input:not(:placeholder-shown).form__input:not(:focus) ~ .form__label {
    top: -0.5rem;
    font-size: 14px;
    left: 0.8rem;
    color: teal;
  }
`;
