import styled from "styled-components";

export const FDFoodItemWraper = styled.div`
  padding: 0.2em;
  height: 10%;
  display: flex;
  flex-direction: row;

  .foodImg {
    flex: 3;
    vertical-align: bottom;
    margin-bottom: 0em;
  }

  .foodContentBox {
    display: flex;
    flex-direction: column;
    flex: 3;
    margin-left: 1em;

    .foodContentTitle {
      flex: 7;
    }

    .foodContentPrice {
      flex: 3;
      margin: 0 0;
      margin-bottom: 0.5em;
    }
  }

  .foodOperationBox {
    display: flex;
    flex-direction: column;
    flex: 4;

    .operationMessage {
      flex: 7;
    }

    .operationBox {
      flex: 3;
      margin-bottom: 0.5em;
      display: flex;
      flex-direction: row;

      .setSpace {
        flex: 1;
        text-align: center;
        line-height: 1.9em;
      }

      .minusOperationIcon {
        flex: 3;
        font-size: 2em;
      }

      .addOperationIcon {
        font-size: 2em;
        flex: 3;
      }
    }
  }
`;
