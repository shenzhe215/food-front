import styled from "styled-components";

export const FDLocationBoxWraper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  min-height: 50px;
  border-top: 1px solid #ffffff;
  position: relative;

  .leftLocBox {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    padding: 5 0;
  }

  .rightLocBox {
    position: absolute;
    right: 5%;
    top: 27%;
  }

  svg {
    font-size: 130%;
    color: #000;
  }

  .locationTitle {
  }

  .locationUserInfo {
    font-size: 10px;
    color: #8a886f;
  }
`;
