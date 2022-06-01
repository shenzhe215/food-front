import styled from "styled-components";

export const FDRegisterWraper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${require("@/assets/img/login-bg.jpg")});
  background-size: cover;

  .register-pane {
    width: 50%;
    height: 400px;
    position: relative;
    left: 25%;
    top: calc((100% - 400px) * 0.382);
    display: flex;
  }

  .registerTitle {
    width: 50%;
    background-color: rgba(255, 255, 255, 0.4);

    .registerSpan {
      line-height: 100px;
      margin-left: 50px;
      .welcome,
      .to-register {
        color: #000;
        font-size: 24px;
        font-weight: 700;
        text-align: center;
      }
    }

    .to-register {
      line-height: 0;
    }
  }
`;

export const FDInputWraper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding-top: 25px;
  .ant-form-item-extra {
    text-align: right;
    padding-top: 6px;
  }

  .submitBtn {
    width: 100%;
  }

  .loginRow {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 3px;
  }

  .ant-input-group-addon {
    width: 93px;
  }
`;
