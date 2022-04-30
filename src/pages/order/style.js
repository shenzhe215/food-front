import styled from "styled-components";

export const FDOrderWraper = styled.div``;

export const Header = styled.div`
  /* font-size: 16px; */
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  /* font-weight: 700; */

  .nav-tab {
    /* display: inline-block; */
    padding: 5px 20px;
    font-size: 16px;

    .navTitle {
      font-weight: 700;
      font-family: Microsoft YaHei;
      cursor: pointer;

      :hover {
        color: #ff6000;
        text-decoration: none;
      }
    }

    .activeTitle {
      font-weight: 700;
      color: red;
      cursor: pointer;
    }

    .navCount {
      /* margin-left: 5px; */

      color: #ff6000;
      font-weight: 400;
    }
  }
`;

export const Content = styled.div``;

export const ContentTitle = styled.div`
  background-color: #ccc;
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 15px;
  padding: 5px;
  .contentLeft {
    width: 30%;
    /* background-color: red; */
  }

  .price {
    width: 10%;
  }

  .count {
    width: 5%;
    /* background-color: red; */
  }

  .comment {
    width: 5%;
    /* background-color: yellow; */
  }

  .location {
    width: 30%;
  }

  .fee {
    width: 10%;
  }

  .status {
    width: 10%;
    /* background-color: red; */
  }
`;

export const PageBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-top: 10px;
`;
