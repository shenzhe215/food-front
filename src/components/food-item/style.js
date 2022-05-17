import styled from "styled-components";

export const FDFoodItemWraper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 150px;
  max-width: 320px;
  margin-bottom: 20px;

  :hover {
  }

  .foodImg {
    vertical-align: bottom;
    user-select: none;
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

  .foodContentPrice,
  .hasdiscount {
    font-size: 15px;
  }

  .foodContentPrice {
    color: red;
  }

  .hasdiscount {
    text-decoration: line-through;
  }

  .foodOperationBox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;

    .food-price {
      display: flex;
      justify-content: space-between;
      width: 80px;
    }
    .operationIcon {
      /* color: #2d81ff; */
      font-size: 15px;
      background-color: #ededed;
    }

    .operationBox {
    }
  }
`;
