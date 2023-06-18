import { useState } from "react";
import styled from "styled-components";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import { useDispatch, useSelector } from "react-redux";
import { addProvider } from "../redux/apiCallsProvider";

export const NewProvider = () => {
  const [inputs, setInputs] = useState({});
  const [err, setErr] = useState(false);
  const { error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.type === "number") {
      setInputs((prev) => {
        return { ...prev, [e.target.id]: e.target.valueAsNumber };
      });
    } else {
      setInputs((prev) => {
        return { ...prev, [e.target.id]: e.target.value };
      });
    }

  };


  const handleClick = async (e) => {
    e.preventDefault();
    addProvider(dispatch, inputs);
    window.location.reload();
  };

  let test = [
    {
      title: "name",
      fn: handleChange,
    },
    {
      title: "phone",
      fn: handleChange,
    },
    {
      title: "address",
      fn: handleChange,
    }
  ];
  console.log(inputs)
  return (
    <C>
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <Wrapper>
          <h1>New Provider</h1>
          <form>
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
          
            <button onClick={handleClick}>Tạo Nhà Cung cấp</button>
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
