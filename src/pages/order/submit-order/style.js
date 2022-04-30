import styled from "styled-components";

export const FDSubmitOrderWraper = styled.div`
  width: 100%;
  height: 100%;

  background-color: #f0f0f0;

  .step {
    width: 70%;
    margin-left: 15%;
  }

  .location {
    .littleTitle {
      display: flex;
      justify-content: space-between;
      font-size: 15px;
      border-bottom: 1px solid #dddddd;
      margin-top: 10px;

      span:first-child {
        font-weight: bold;
      }

      span:nth-child(2) {
        color: #1f86ff;
        :hover {
          cursor: pointer;
          color: #ff4400;
        }
      }
    }

    .orderLocation {
      background-color: #d4edf4;
      text-align: center;
      margin-top: 20px;
      border: 1px solid #3399ff;
    }
  }

  .secondTitle {
    margin-top: 10px;
    height: 30px;
    font-size: 15px;
    font-weight: bold;
    border-bottom: 1px solid #dddddd;
  }

  .prices,
  .hasdiscount {
    text-align: right;

    .title {
      font-size: 15px;
    }

    .money {
      font-size: 20px;
      color: red;
      margin-right: 10px;
    }
  }

  .hasdiscount {
    text-decoration: line-through;
  }

  .submitBtn {
    text-align: right;
    margin-top: 20px;
    margin-right: 10px;
    .ant-btn {
      margin-bottom: 20px;
      width: 150px;
      height: 45px;
    }
  }

  .coupon {
    text-align: right;
  }
`;
