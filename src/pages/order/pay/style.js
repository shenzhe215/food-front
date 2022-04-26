import styled from "styled-components";

export const PayWraper = styled.div`
  background-color: #eeeeee;
`;

export const PayUp = styled.div`
  background-color: #f3f3f3;
  border: 1px solid #dbdbdb;
  /* text-align: center; */
  padding: 5px 5px;
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
  }

  .payWay {
    display: flex;
    margin-top: 10px;
    .payItem {
      display: flex;
      flex-direction: column;
      padding: 0px 10px;

      .itemTitle {
        width: 130px;
        height: 50px;
        border: 1px solid #6ba7ea;
        border-radius: 5px;
        background-image: url(${require("@/assets/img/all.jpg")});
      }

      .alipay {
        background-position: -210px 130px;
      }

      .wechat {
        background-position: -210px 190px;
      }

      .itemImg {
        width: 200px;
        height: 200px;
        margin-top: 10px;
      }

    }
  }
`;

export const PayBottom = styled.div`
  background-color: #f9f9f9;
  font-size: 15px;
  text-align: right;
  span {
    color: red;
    font-size: 25px;
  }
`;
