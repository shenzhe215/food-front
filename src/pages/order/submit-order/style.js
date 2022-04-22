import styled from "styled-components";

export const FDSubmitOrderWraper = styled.div`
  width: 100%;
  height: 100%;

  background-color: #f0f0f0;

  .step {
    width: 70%;
    margin-left: 15%;
  }

  > .title {
    height: 50px;
    font-size: 30px;
    background-color: #dcddd8;
    margin-bottom: 20px;
  }

  .location {
    > .title {
      display: flex;
      justify-content: space-between;
      font-size: 15px;
      border-bottom: 1px solid #dddddd;
      margin-top: 10px;

      span:first-child {
        font-weight: bold;
      }

      span:nth-child(2) {
        color: #1f86ff;
        :hover {
          cursor: pointer;
          color: #ff4400;
        }
      }
    }
  }
`;
