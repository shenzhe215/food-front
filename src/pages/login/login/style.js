import styled from "styled-components";

export const FDLoginWraper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: #f5f5f5;
  /* background-image: url(${require("@/assets/img/bg.jpg")});*/

  .loginTitle {
    position: relative;
    top: 20%;
    font-size: 20px;
    text-align: center;
    color: #000000;
  }
`;

export const FDInputWraper = styled.div`
  position: relative;
  top: 30%;
  left: 37.5%;

  /* width: 30%; */

  .submitBtn {
    width: 100%;
    margin-left: 63.99px;
  }

  .registerRow {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 3px;
  }
`;
