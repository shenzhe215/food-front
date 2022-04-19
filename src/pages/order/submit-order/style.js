import styled from "styled-components";

export const FDSubmitOrderWraper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  flex: auto;

  padding: 0em 1em;

  // 1
  .submitOrderUp {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 1em;

    .orderLocation {
      font-size: 3em;
      padding: 0 0.2em;
    }

    .orderInfo {
      font-size: 1.5em;
      padding: 0 0.4em;
      color: #d6d6d6;
    }
  }

  // 2
  .submitOrderMiddle {
    display: flex;

    justify-content: space-between;
    align-items: center;
    height: 4em;
    font-size: 1.2em;
    padding: 0 0.4em;
    border-radius: 1em;

    margin-top: 1em;
    background-color: #ffffff;
  }

  // 3
  .submitOrderFood {
    background-color: #fff;
    border-radius: 1em;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    max-height: 50%;
    overflow: scroll;
  }

  // 4
  .submitOrderPrice {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 1em;
    padding: 0em 1em;
    margin-top: 1em;

    .allMoney {
      display: flex;
      justify-content: space-between;
      font-size: 2em;
    }

    .disCount {
      display: flex;
      justify-content: space-between;
      font-size: 2em;
      margin-top: 0.5em;
    }
  }
`;
