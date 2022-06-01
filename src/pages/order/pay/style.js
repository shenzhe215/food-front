import styled from "styled-components";

export const PayWraper = styled.div`
  /* background-color: #eeeeee; */

  .pay-body {
    background-color: #fff;
    padding: 20px 15px;
  }

  .hidden {
    display: none;
  }

  .show {
    display: block;
  }

  .step {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    border-bottom: 1px solid #dbdbdb;
  }

  .itemImg {
    display: flex;
    justify-content: center;
    padding-left: calc(50% - 100px);
    img {
      margin-left: calc(50% - 100px);
    }
  }
`;

export const PayUp = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: #fff;

  font-size: 15px;
  font-weight: bold;
  padding: 5px 5px;

  p {
    display: flex;
    align-items: center;
  }
`;

export const PayContent = styled.div`
  background-color: #fff;

  .contentUp {
    text-align: center;
    height: 80px;
    span {
      color: red;
    }
  }

  .border {
    border-bottom: 1px solid #f0f0f0;
    padding: 5px;
    font-size: 15px;
    font-weight: bold;
  }

  .payNum {
    /* background-color: #f9f9f9; */
    font-size: 15px;
    text-align: right;
    span {
      color: red;
      font-size: 25px;
    }
  }
  .payWay {
    display: flex;
    margin-top: 10px;
    justify-content: right;
    .payItem {
      display: flex;
      flex-direction: column;
      padding: 0px 10px;
      .itemTitle,
      .chosen {
        width: 130px;
        height: 50px;
        border: 1px solid #6ba7ea;
        border-radius: 5px;
        cursor: pointer;
        background-image: url(${require("@/assets/img/all.jpg")});
      }

      .alipay {
        background-position: -215px 127px;
      }

      .wechat {
        background-position: -210px 187px;
      }

      .monitor {
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        line-height: 50px;
        user-select: none;
        :hover {
          cursor: pointer;
        }
      }

      .chosen {
        border: 3px solid #1f95ff;
      }
    }
  }

  .sure-pay {
    text-align: right;
    margin-top: 20px;
    margin-right: 9px;

    .pay-btn {
      width: 128px;
      height: 40px;
      font-size: 20px;
    }
  }
`;

export const PayNum = styled.div``;
