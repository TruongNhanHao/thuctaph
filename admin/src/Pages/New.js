import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import styled from "styled-components";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <Wrapper>
      <Sidebar />
      <div className="newContainer">
        <Topbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  display: flex;

  .newContainer {
    flex: 6;
    .top,
    .bottom {
      -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
      box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
      padding: 10px;
      margin: 20px;
      display: flex;
      h1 {
        color: lightgray;
        font-size: 20px;
      }
      .left {
        flex: 1;
        text-align: center;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      .right {
        flex: 2;

        form {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: space-around;

          .formInput {
            width: 40%;

            label {
              display: flex;
              align-items: center;
              gap: 10px;

              .icon {
                cursor: pointer;
              }
            }

            input {
              width: 100%;
              padding: 5px;
              border: none;
              border-bottom: 1px solid gray;
            }
          }
          button {
            width: 150px;
            padding: 10px;
            border: none;
            background-color: teal;
            color: white;
            font-weight: bold;
            cursor: pointer;
            margin-top: 10px;
          }
        }
      }
    }
  }
`;
export default New;
