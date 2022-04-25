import styled from "styled-components";

export const FDOrderWraper = styled.div``;

export const Header = styled.div`
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  font-weight: 700;
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
