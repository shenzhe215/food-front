import styled from "styled-components";

export const FDDockWraper = styled.div`
  position: fixed;
  background-color: #000000;
  bottom: 3em;
  height: 7%;
  width: 86%;
  left: 7%;
  border-radius: 5em;
  border: none;
  // 透明度
  opacity: 0.8;
  z-index: 999;
  // 布局
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .dockLeft {
    /* flex: 6; */
    display: flex;
    flex-direction: column;
    padding-left: 2em;
    color: #ffffff;

    .dockMoney {
      flex: 2;
      font-size: 2em;
      color: #d6d6d6;
    }

    .sendMoney {
      color: #c4c4c4;
      display: flex;
      font-size: 1em;
      padding-bottom: 0.3em;
    }
  }

  .dockRight {
    /* flex: 3; */
    color: #000000;
    background-color: #fecf4b;
    display: flex;
    align-items: center;
    justify-content: right;
    padding: 0 2em;
    border-radius: 0 5em 5em 0;

    font-size: 1.1em;
    font-weight: bold;
  }
`;
