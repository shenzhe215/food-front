import styled from "styled-components";

export const FDUserWraper = styled.div`
  width: 100%;
  height: 100%;

  .titlePane {
    min-height: 300px;
    position: relative;
  }

  .bg::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0em 0em 0em 0em;
    /* background: #2196f3; */
    /* background: #ffa931; */
    background: linear-gradient(#ffa931,rgba(255,255,255,1));;
    /* opacity: 0.5; */
    /* z-index: -1;*/
  }

  .bg {
    width: 100%;
    background-color: #ffa931;
  }

  .info {
    position: absolute;
    background: #fff;
    width: 85%;
    height: 55%;
    bottom: 0px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    box-shadow: 0px 0px 10px 3px #ddd;
    margin: 50px auto 0;
    padding: 0 20px;
    padding-top: 0;
    text-align: center;
    font-size: 13px;
  }

  .auth {
    margin-bottom: 30px;
  }

  .user {
    padding-top: 15px;
  }

  .myIcon {
    position: relative;
    transform: translateY(-50%);
    border-radius: 50%;
    width: 70px;
    height: 70px;
    border: solid 5px #f5f5f5;
    display: inline-block;
    box-shadow: 0px 2px 2px #bdbdbd;
  }
  .avatar {
    width: 100%;
    border-radius: 50%;
  }
  .name {
    margin-top: -30px;
    margin-bottom: 10px;
  }
  .auth :global(span) {
    border-radius: 30px;
    color: #fff;
    padding: 2px 15px;
    background: #21b97a;
    font-size: 12px;
  }
  .edit {
    color: #999;
    font-size: 12px;
  }
  .edit :global(.am-button-primary) {
    background-color: #21b97a;
  }

  .arrow {
    transform: rotate(-90deg);
    display: inline-block;
    margin-left: 3px;
  }

  .arrow :global(.icon-arrow) {
    font-size: 12px;
    vertical-align: middle;
  }

  .ad {
    text-align: center;
    margin-top: 10px;
  }

  .ad :global(img) {
    width: 92%;
  }

  /* .menuItem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 13px;
    color: #333;
  } */

  /* .menuItem :global(i) {
    font-size: 20px;
    margin-bottom: 10px;
  } */

  /* :global(.am-grid.am-grid-square .am-grid-item:before) {
    padding-bottom: 76%;
  }

  :global(.am-grid .am-flexbox) {
    background-color: inherit;
  } */
`;
