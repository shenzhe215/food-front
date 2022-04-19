import styled from "styled-components";

export const FDFoodInfoWraper = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  .foodInfoUp {
    flex: 4;

    .foodInfoImg {
      width: 100%;
      height: 100%;
    }
  }

  .foodInfoMiddle {
    flex: 2;
    background-color: white;
    padding-left: 1em;
    display: flex;
    flex-direction: row;

    .middleLeftContent {
      flex: 7;
      display: flex;
      flex-direction: column;

      h1 {
        margin-top: 0.5em;
        color: black;
        font-size: 2em;
        padding-bottom: 0.3em;
      }

      .foodPrice {
        color: red;
        font-size: 2em;
        padding-bottom: 0.3em;
      }
    }

    .middleRightContent {
      flex: 3;
      display: flex;
      align-items: center;
    }
  }

  .foodInfoDown {
    flex: 4;
    background-color: white;
    padding-left: 1em;

    .operation {
      margin-top: -2em;

      .description {
        font-size: 1.7em;
        overflow: scroll;
      }

      .adm-tabs-tab-wrapper {
      }
    }
  }
`;
