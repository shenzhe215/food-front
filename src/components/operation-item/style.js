import styled from "styled-components";

export const FDOperationItemWraper = styled.div`
  display: flex;
  flex-direction: column;

  .icon {
    text-align: center;

    svg {
      font-size: 160%;
      color: #000;
    }
  }
  .title {
    text-align: center;
    font-weight: normal;
    font-size: 12px;
    color: #000;
    padding: 10px 0;
  }
`;
