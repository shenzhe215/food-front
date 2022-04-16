import styled from "styled-components";

export const FDOperationBoxWraper = styled.div`
  background: #fff;
  margin-left: 9px;
  margin-right: 9px;
  margin-top: 10px;

  box-shadow: 0px 0px 10px 3px #ddd;
  padding: 0 20px;
  padding-top: 0;
  font-size: 13px;

  .operationItem {
    display: flex;
    flex-direction: row;
  }

  .titleRow {
    display: flex;
    flex-direction: row;

    h2 {
      font-weight: normal;
      margin-top: 5px;
      margin-left: 15px;
    }

    /* h2::before { */
    .verticalLine {
      content: "";
      width: 1.5px;
      height: 11px;
      position: relative;
      top: 5px;
      left: 10px;
      margin-top: 5px;
      background: #ffcb84;
    }

    svg {
      margin-top: 5px;
      font-size: 80%;
      color: black;
      margin-top: 9.7px;
      /* color: #d5d5d5; */
      float: right;
    }
  }
`;
