import styled from "styled-components";


export const ContentArea = styled.div`
  background-color: #ccc;
  position: relative;
  left: calc(30% - 120px);
  right: 20%;
  width: 40%;
  display: inline-block;

  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    label {
      font-size: 15px;
      padding: 5px 10px;
      width: 150px;
      text-align: left;
    }

    p {
      font-size: 18px;
      width: 150px;
      padding: 5px;
    }
  }
`;

