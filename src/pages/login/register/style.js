import styled from "styled-components";

export const FDRegisterWraper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: #ffffff; */
  /* background-color: blue; */
  /* linear-gradient(to right, red 0%,red 50%,white 51%,white 100%); */
  /* background-image: url(${require("@/assets/img/bg.jpg")});*/
  .registerTitle::before {
    /* content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20%; */
    /* border-radius: 0em 0em 80em 80em; */
    /* background: #2196f3; */
    /* opacity: 0.5; */
    /* z-index: -1; */
  }

  .registerTitle {
    margin-top: 20%;
    display: flex;
    flex-direction: column;
    padding-left: 8%;

    .registerSpan {
      font-size: 2em;
      font-weight: bold;
    }

    .welcomeSpan {
      font-size: 1.3em;
      color: #999999;
    }
  }
`;

export const FDInputWraper = styled.div`
  margin-top: 30%;
  padding: 0 4%;

  .loginRow {
    display: flex;
    justify-content: space-between;
    color: #999999;
  }
`;
