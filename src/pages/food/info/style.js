import styled from "styled-components";

export const FDFoodInfoWraper = styled.div`
  /* background-color: #f7f7f7; */
  width: 100%;
  height: 100%;

  .food {
    position: relative;
    /* left: calc((100% - 720px) / 2); */
    left: 20%;
    /* right: 20%; */
  }

  .foodContent {
    display: flex;
    flex-direction: row;
    /* border: 1px solid black; */
    .foodInfo {
      display: flex;
      flex-direction: column;
      /* margin-left: 10%; */
      margin-left: 50px;
      width: calc((60% - 450px));
      justify-content: space-between;

      .back {
        display: flex;
        justify-content: right;
        width: 300px;
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

        .hasdiscount {
          text-decoration: line-through;
          color: black;
          font-weight: normal;
          /* font-size: 20px; */
        }
      }

      .thirdLine {
        font-size: 14px;
        padding-left: 10px;
        display: flex;
        justify-content: space-between;
        width: 300px;
        margin-right: 10%;
      }

      .fourthLine {
        padding-left: 10px;

        .space {
          margin: 0 10px;
        }
      }
    }
  }

  .foodInfoDown {
    margin-top: 20px;
    font-size: 20px;
    border-bottom: 1px solid #dadada;
    /* width: 720px; */
    width: 60%;
    .clicked {
      color: red;
    }

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
    font-size: 15px;
    /* width: 720px; */
    width: 60%;
  }
`;

export const CommentArea = styled.div`
  margin-right: 20%;
  width: 60%;
`;
