import styled from "styled-components";

export const ContentArea = styled.div`
  /* background-color: #ccc; */
  width: 40%;
  display: inline-block;
  margin-top: 50px;

  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    label {
      font-size: 15px;
      padding: 5px 10px;
      width: 100px;
      text-align: right;
    }

    p {
      font-size: 18px;
      width: 150px;
      padding: 5px;
    }
  }
`;
