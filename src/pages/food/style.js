import styled from "styled-components";

export const FDFoodWraper = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: pink; */

  .orderList {
    font-size: 30px;
    position: fixed;
    left: 90%;
    top: 10%;
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
    display: flex;
    flex-basis: auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    div:nth-child(5n + 0) {
      margin-right: 0px;
    }
  }
`;
