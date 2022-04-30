import styled from "styled-components";

export const FDFoodWraper = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: pink; */
`;

export const FoodHeader = styled.div`
  display: flex;
  justify-content: space-between;
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
      /* line-height: 1; */
      padding: 5px 20px;
      font-size: 16px;

      .navTitle {
        font-weight: 700;
        font-family: Microsoft YaHei;
        :hover {
          color: #ff6000;
          text-decoration: none;
        }
      }

      .activeTitle {
        font-weight: 700;
        color: red;
      }

      .navCount {
        margin-left: 5px;
        color: #ff6000;
        font-weight: 400;
      }
    }
  }

  .headBottom {
    font-size: 16px;
    cursor: pointer;
    .shopCar {
      font-size: 20px;
      padding: 5px;
    }
    width: 120px;
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

  .main {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;

    > div {
      display: inline-block;
      /* margin-right: calc((20% - 150px) * 1.25); */
      margin-right: calc(((100 / 6 * 1%) - 150px) * 1.2);
    }

    > div:nth-child(6n + 0) {
      margin-right: 0px;
    }
  }
`;

export const PageBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding-right: 20px;
`;
