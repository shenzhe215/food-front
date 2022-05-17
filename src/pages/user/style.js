import styled from "styled-components";

export const FDUserWraper = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #f0f3ef; */

  .fd-content {
    display: flex;
    flex-direction: row;
    justify-content: left;
    position: relative;
    width: 100%;
    height: 400px;

    .user-tab {
      /* margin-right: 20px; */
      padding: 15px 20px;
      background-color: #fff;
      margin-right: 20px;
    }
  }
`;

export const FDUserContentWraper = styled.div`
  width: 90%;
  text-align: center;
  background-color: #fff;
  padding: 10px;

  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  ::-webkit-scrollbar {
    display: none;
  }
`;
