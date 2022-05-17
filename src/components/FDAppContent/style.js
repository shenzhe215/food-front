import styled from "styled-components";
export const FDContentWrapper = styled.div`
  position: absolute;
  height: calc(100% - 55px);
  left: 10%;
  right: 10%;
  width: 80%;
  overflow-y: auto;

  user-select: none;

  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  ::-webkit-scrollbar {
    display: none;
  }
`;
