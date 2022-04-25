import styled from "styled-components";

export const FDFoodInfoWraper = styled.div`
  background-color: #f7f7f7;
  /* background-color: lightpink; */
  width: 100%;
  height: 100%;

  .title {
    height: 50px;
    font-size: 30px;
    background-color: #dcddd8;
    margin-bottom: 20px;
  }

  .foodContent {
    display: flex;
    flex-direction: row;
    margin-left: 20%;
    /* border: 1px solid black; */
    /* width: 60%; */

    .foodInfo {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      justify-content: space-between;

      .back {
        display: flex;
        justify-content: right;
        margin-bottom: 60px;
      }

      .firstLine {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .secondLine {
        background-color: #d4edf4;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        width: 300px;
        padding-left: 10px;
        span {
          display: flex;
          align-items: center;

          h1 {
            color: red;
            padding-left: 20px;
          }
        }
      }

      .thirdLine {
        font-size: 14px;
        padding-left: 10px;
        display: flex;
        justify-content: space-between;
      }

      .fourthLine {
        padding-left: 10px;

        .space {
          margin: 0 10px;
        }
      }
    }
    .foodInfoDown {
      margin-top: 20px;
      margin-left: 20%;
      font-size: 20px;
      border-bottom: 1px solid black;
      width: 720px;

      span {
        margin-right: 15px;
        :hover {
          cursor: pointer;
          color: #3399ff;
        }

        :active {
          color: blue;
        }
      }

      span.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }
    }
  }

  .foodInfoDown {
    margin-top: 20px;
    margin-left: 20%;
    font-size: 20px;
    border-bottom: 1px solid black;
    width: 720px;

    span {
      margin-right: 15px;
      :hover {
        cursor: pointer;
        color: #3399ff;
      }
    }
  }

  .description {
    margin-top: 20px;
    margin-left: 20%;
    font-size: 15px;
    width: 720px;
  }
`;

export const CommentArea = styled.div`
  margin-left: 20%;
  margin-right: 20%;
`;
