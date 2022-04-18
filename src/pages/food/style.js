import styled from "styled-components";

export const FDFoodWraper = styled.div`
  position: relative;
  /* background-color: blue; */
  height: 100%;
  width: 100%;
`;

export const FDFoodHeaderWraper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  // 调配上下部分比例
  height: 20%;
  background-color: pink;
  min-height: 100px;
`;

export const FDFoodContentWraper = styled.div`
  position: relative;
  top: 20%;
  left: 0;
  right: 0;
  // 调配上下部分比例
  height: 80%;
  min-height: 400px;

  // 调配容器布局
  .container {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    height: 100%;
  }

  // 改变侧栏宽度
  .side {
    flex: none;
    width: 30%;
    background-color: #f5f5f5;
  }

  .adm-side-bar-items {
    flex: auto;
    height: 100%;
  }


  .main {
    flex: auto;
    background-color: #f5f5f5;
    overflow: scroll;
  }

  .content {
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: #cccccc;
    &.active {
      display: flex;
    }
  }
`;
