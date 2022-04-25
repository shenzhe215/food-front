import styled from "styled-components";

export const FDHeadWraper = styled.div``;

export const HeaderWrapper = styled.div`
  height: 55px;
  font-size: 14px;
  color: #fff;
  background-color: #242424;

  .appTitle {
    vertical-align: middle;
    font-weight: bold;
    font-size: 15px;
    width: 120px;
    display: flex;
    align-items: center;
  }

  .content {
    height: 50px;

    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }

  .downMenu {
    position: absolute;
    top: 50px;
    border-top: 5px solid #c20c0c;
    background-color: #242424;

    width: 96px;
    font-size: 15px;
    z-index: 2;
    display: none;
    text-align: center;

    a {
      display: block;
      /* padding: 5px 20px; */
      color: #ccc;
      border-bottom: 1px solid #ccc;
    }

    a:hover {
      text-decoration: none;
      background-color: #000;
      color: #fff;
    }
  }
`;

export const HeaderLeft = styled.div`
  display: flex;

  .select-list {
    display: flex;
    line-height: 50px;

    .select-item {
      position: relative;
      > a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      &:hover > a,
      a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }
    }

    .person:hover .loginMenu4 {
      display: block;
    }

    .order:hover .loginMenu3 {
      display: block;
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;
  justify-content: space-around;
  width: 40px;
  margin-left: 80px;
  :hover {
    cursor: pointer;
    .loginMenu {
      display: block;
      color: #fff;
      background: #242424;
      text-decoration: none;
    }
  }

  .loginMenu {
    width: 120px;
    line-height: 50px;

    right: calc(10% - 40px);
    :hover {
      background-color: #000;
      color: #ccc;
    }
  }

  .login {
    :hover {
      cursor: pointer;
      color: #fff;
      text-decoration: none;
    }
  }
`;
