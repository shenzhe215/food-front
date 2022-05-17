import styled from "styled-components";

export const FDUserTabWraper = styled.div`
  /* width: 100%; */
  width: 130px;
  height: 100%;
  background-color: #fff;
  font-size: 20px;
  display: inline-block;

  /* position: relative;
  left: 15%; */

  .nav-tab {
    display: flex;
    flex-direction: column;

    .activeTitle,
    .navTitle {
      margin-bottom: 5px;
      cursor: pointer;
      height: 32px;
    }

    .activeTitle {
      color: #e4393c;
    }

    .navTitle {
      :hover {
        color: #e4393c;
      }
    }
  }
`;
