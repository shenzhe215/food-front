import styled from "styled-components";

export const FDFoodWraper = styled.div`
  width: 100%;
  height: 100%;
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
    font-size: 18px;
    color: #888;
    margin-top: -15px;

    .navTitle,
    .activeTitle {
      font-family: Microsoft YaHei;
      display: inline-block;
      padding: 5px 20px;
      width: 150px;
      text-align: center;
      margin-top: 15px;
    }
    .navTitle {
      :hover {
        color: #e60012;
        text-decoration: none;
      }
    }

    .activeTitle {
      color: white;
      background-color: #e60012;
      border-radius: 20px;
    }

    .navCount {
      margin-left: 5px;
      color: #e60012;
      font-weight: 400;
    }
  }

  .headBottom {
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    .shopCar {
      font-size: 20px;
      padding: 10px;
    }
    min-width: 140px;
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
    padding-left: 40px;
    padding-right: 40px;

    > div {
      display: inline-block;
      /* margin-right: calc((20% - 150px) * 1.25); */
      margin-right: calc(((100 / 3 * 1%) - 320px) * 1.5);
    }

    > div:nth-child(3n + 0) {
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
