import styled from "styled-components";

export const FDDockWraper = styled.div`
  position: fixed;
  background-color: #000000;
  bottom: 3em;
  height: 7%;
  width: 86%;
  left: 7%;
  border-radius: 5em;
  // 透明度
  opacity: 0.8;
  z-index: 999;


  // 布局
  display: flex;
  flex-direction: row;

  .dockLeft {
    flex: 2;
    text-align: center;
    display: flex;
    align-items: center;
    margin-left: 2em;

    .shopIcon {
      font-size: 3em;
    }
  }

  .dockMiddle {
    flex: 5;
    display: flex;
    flex-direction: column;

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
    flex: 3;
    color: #5e5e5e;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-right: 1em;
  }
`;
