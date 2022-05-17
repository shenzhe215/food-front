import styled from "styled-components";

export const FDFoodInfoWraper = styled.div`
  width: 100%;
  height: 100%;

  .food {
    position: relative;
    padding: 20px 20%;

    min-height: 824px;
    background-color: #fff;
  }

  .foodContent {
    display: flex;
    flex-direction: row;
    
    .foodInfo {
      display: flex;
      flex-direction: column;
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
        width: 300px;
        h1 {
          width: 100%;
        }
      }

      .secondLine {
        background-color: #f4f4f4;
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
    width: 100%;
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
    font-size: 18px;
    /* width: 720px; */
    width: 100%;
  }
`;

export const CommentArea = styled.div`
  margin-right: 20%;
  width: 100%;
  font-size: 18px;
`;
