import styled from "styled-components";

export const FDLoginWraper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  /* background-image: url(${require("@/assets/img/bg.jpg")});
  background-repeat: no-repeat;
  background-position: center; */

  .loginTitle {
    margin-top: 20%;
    display: flex;
    flex-direction: column;
    padding-left: 8%;

    .loginSpan {
      font-size: 2em;
      font-weight: bold;
    }

    .welcomeSpan {
      font-size: 1.3em;
      color: #999999;
    }
  }

  .radioGroup {
    float: right;
    margin-right: 20px;
  }
`;

export const FDInputWraper = styled.div`
  /* margin-top: 30%; */
  margin-top: 30%;
  padding: 0 4%;
  .registerRow {
    display: flex;
    justify-content: space-between;
    color: #999999;
  }
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

  .space {
    margin-left: 10px;
    margin-right: 20px;
  }
`;
