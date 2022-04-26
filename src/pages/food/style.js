import styled from "styled-components";

export const FDFoodWraper = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: pink; */

  .orderList {
    font-size: 30px;
    position: fixed;
    left: 90%;
    top: 80%;

    .shopCar {
      font-size: 30px;
    }
  }
`;

export const FoodHeader = styled.div`
  position: relative;
  bottom: -2px;
  margin-top: 22px;
  margin-bottom: 22px;
  border-bottom: 2px solid #e8e8e8;

  .headItem {
    display: inline-block;
    position: relative;
    cursor: pointer;

    .nav-tab {
      display: inline-block;
      line-height: 1;
      padding: 0 20px 12px;
      font-size: 16px;

      .navTitle {
        font-weight: 700;
        font-family: Microsoft YaHei;
        :hover {
          color: #ff6000;
        }

        :active {
          color: red;
        }
      }

      .navCount {
        margin-left: 5px;
        color: #ff6000;
        font-weight: 400;
      }
    }
  }
`;

export const FDFoodHeaderWraper = styled.div`
  height: 50px;
  font-size: 30px;
  background-color: #dcddd8;
`;

export const FDFoodContentWraper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  .side {
    width: 13%;
    font-size: 20px;
    margin-right: 30px;

    .foodSide {
      border: 1px solid #dee2d1;
      padding-left: 30px;
      :hover {
        cursor: pointer;
        color: #3399ff;
      }
    }
  }

  .main {
    width: 90%;

    > div {
      display: inline-block;
      margin-right: calc((20% - 150px) * 1.25);
    }

    > div:nth-child(5n + 0) {
      margin-right: 0px;
    }
  }
`;
