import styled from "styled-components";

export const FDUserTabWraper = styled.div`
  /* width: 100%; */
  width: 120px;
  height: 100%;
  background-color: pink;
  font-size: 20px;
  display: inline-block;
  position: relative;
  left: 15%;

  .nav-tab {
    display: flex;
    flex-direction: column;

    .activeTitle,
    .navTitle {
      margin-bottom: 5px;
      cursor: pointer;
    }

    .activeTitle {
      color: #ff5e42;
    }

    .navTitle {
      :hover {
        color: #ff7742;
      }
    }
  }
`;
