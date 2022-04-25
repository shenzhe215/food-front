import styled from "styled-components";

export const FDUserWraper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentArea = styled.div`
  background-color: #ccc;
  position: relative;
  left: 20%;
  right: 20%;
  width: 60%;

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

export const InfoBottom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
  justify-content: center;
`;

export const Footer = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: green; */
`;
