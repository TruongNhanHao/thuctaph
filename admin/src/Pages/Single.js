import styled from "styled-components";
import { Charts } from "../components/Charts";
import { Sidebar } from "../components/Sidebar";
// import { Tables } from "../components/Table";
import { Topbar } from "../components/Topbar";

const Single = () => {
  return (
    <Wrapper>
      <Sidebar />
      <div className="singleContainer">
        <Topbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Charts aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          {/* <Tables /> */}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  .singleContainer {
    flex: 6;

    .top {
      padding: 20px;
      display: flex;
      gap: 20px;

      .left {
        flex: 1;
        -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
        box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
        padding: 44px;
        font-size: 24px;
        position: relative;

        .editButton {
          position: absolute;
          top: 0;
          right: 0;
          padding: 5px;
          font-size: 12px;
          color: #7451f8;
          background-color: #7551f818;
          cursor: pointer;
          border-radius: 0px 0px 0px 5px;
        }

        .item {
          display: flex;
          gap: 20px;

          .itemImg {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
          }

          .details {
            .itemTitle {
              margin-bottom: 10px;
              color: #555;
            }

            .detailItem {
              margin-bottom: 10px;
              font-size: 14px;

              .itemKey {
                font-weight: bold;
                color: gray;
                margin-right: 5px;
              }

              .itemValue {
                font-weight: 300;
              }
            }
          }
        }
      }

      .right {
        flex: 2;
      }
    }

    .bottom {
      -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
      box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
      padding: 20px;
      margin: 10px 20px;
    }

    .title {
      font-size: 16px;
      color: lightgray;
      margin-bottom: 20px;
    }
  }
`;
export default Single;
