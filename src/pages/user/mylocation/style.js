import styled from "styled-components";
export const FDLocationWraper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ececec;
  /* background-image: url(${require("@/assets/img/bg.jpg")});
  background-repeat: no-repeat;
  background-position: center; */

  .loginWay {
  }

  .radioGroup {
    float: right;
    margin-right: 20px;
  }
`;

export const FDInputWraper = styled.div`
  margin-top: 30%;
`;

export const FDBtnWraper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  margin-right: 10%;

  h4 {
    text-align: center;
    font-size: 17px;
    color: #99a5b8;
    margin-top: 9px;
  }

  .submitBtn {
    width: 40%;
  }
  .space {
    margin-left: 10px;
    margin-right: 20px;
  }
`;
