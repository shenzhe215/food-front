import styled from "styled-components";

export const FDFoodItemWraper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 150px;
  max-width: 150px;
  background-color: #f5f5f5;
  margin-right: 40px;
  margin-bottom: 20px;

  .foodImg {
    vertical-align: bottom;
    :hover {
      cursor: pointer;
    }
  }

  .foodContentBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .foodContentTitle {
      padding-top: 5px;
    }
  }

  .foodContentPrice {
    color: red;
    font-size: 15px;
  }

  .foodOperationBox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;

    .operationIcon {
      color: #2d81ff;
      font-size: 15px;
    }

    .operationBox {
      display: flex;
      flex-direction: row;
      padding-right: 5px;

      .hasBorder {
        border: none;
      }

      div {
        border: 1px solid #000;
        margin: 0px 0px 0px -1px;
        width: 19px;
        height: 19px;
        text-align: center;
      }

      div:nth-child(2) {
        border-right: none;
      }
    }
  }
`;
