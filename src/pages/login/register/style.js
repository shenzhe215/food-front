import styled from "styled-components";

export const FDRegisterWraper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: #f5f5f5;

  .registerTitle {
    position: relative;
    top: 15%;
    font-size: 20px;
    text-align: center;
    color: #000000;
  }
`;

export const FDInputWraper = styled.div`
  position: relative;
  top: 20%;
  left: 33%;

  .ant-form-item-extra {
    text-align: right;
    padding-top: 6px;
  }

  
  .submitBtn {
    width: 100%;
  }

  .loginRow {
    width: 100%;
    margin-top: -30px;

    display: flex;
    justify-content: space-between;
    padding-right: 3px;
  }
`;
