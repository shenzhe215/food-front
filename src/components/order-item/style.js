import styled from "styled-components";

export const OrderItemWraper = styled.div``;

export const Header = styled.div`
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-between;

  .headerLeft {
    span {
      padding-left: 20px;
      font-size: 15px;
    }
    span:first-child {
      font-weight: bold;
    }

    span:nth-child(2) {
      color: #999;
    }
  }

  .headerRight {
    margin-right: 20px;
    font-size: 17px;
    display: flex;
    align-items: center;
  }
`;

export const Content = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  text-align: center;
  border: 1px solid #bfbfbf;

  a:hover {
    text-decoration: none;
  }

  .foodArea {
    width: 50%;
    display: flex;
    flex-direction: column;
    /* padding: 5px; */
    border-right: 1px solid #bfbfbf;

    div:last-child {
      border-bottom: none;
    }
  }

  .contentLeft {
    width: 100%;
    height: 100%;
    /* background-color: red; */

    display: flex;
    padding: 3px;
    border-bottom: 1px solid #bfbfbf;

    .foodInfo {
      width: 60%;
      display: flex;
      justify-content: left;
      align-items: center;
      user-select: none;

      .foodTitle {
        font-weight: bold;
        padding-left: 30px;
      }
    }

    .price {
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .count {
      width: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .comment,
    .noComment {
      width: 10%;
      display: flex;
      align-items: center;
      justify-content: center;

      :hover {
        cursor: pointer;
      }
    }

    .comment {
      color: #3f9cd9;
    }
  }

  .location {
    width: 30%;
    font-size: 15px;
    display: flex;
    align-items: center;
    border-right: 1px solid #bfbfbf;
  }

  .fee {
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .ratefeebox,
    .feebox {
      color: black;
    }

    .ratefeebox {
      span {
        color: red;
        font-weight: 700;
      }
    }

    .feebox {
      text-decoration: line-through;
    }
  }

  .status {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #bfbfbf;

    flex-direction: column;

    p {
      padding-bottom: 5px;
    }

    a {
      color: red;
    }

    span {
      color: #118adb;
      cursor: pointer;
    }
  }
`;
