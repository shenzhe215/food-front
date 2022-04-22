import styled from "styled-components";

export const FDOperationBoxWraper = styled.span`
  display: flex;
  flex-direction: row;
  padding-right: 5px;

  .operationIcon {
    /* color: #2d81ff; */
    font-size: 15px;
    background-color: #ededed;
  }

  .hasBorder {
    border: none;
  }

  div {
    border: 1px solid #dfdfdf;
    margin: 0px 0px 0px -1px;
    width: 19px;
    height: 19px;
    text-align: center;
    user-select: none;
  }

  div:nth-child(2) {
    border-right: none;
  }
`;
