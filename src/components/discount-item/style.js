import styled from "styled-components";

export const CouponWraper = styled.div`
  background-color: #e9bb16;
  background-image: -webkit-linear-gradient(left, #f4703f 0%, #e73130 100%);
  position: relative;
  display: flex;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  width: 240px;
  /* margin-right: 40px; */
  /* margin-left: 20px; */
  margin-bottom: 10px;

  .left {
    width: 55%;
    border-right: 1px dashed #f7deab;
    display: flex;

    .left-box {
      display: flex;
      flex-direction: column;
      /* background-color: #fff; */
      justify-content: center;
      width: 40%;
      height: 100px;

      .unit {
        color: #f7deab;
        font-size: 20px;
        text-align: right;
      }

      .type {
        border-radius: 10px;
        background-color: #f8dfac;
        color: #d3492c;
        font-weight: 700;
        margin-left: -20px;
        width: 65px;
      }
    }

    .title {
      font-size: 60px;
      color: #f7deab;
      font-weight: 700;
      display: flex;
      width: 60%;
      height: 100px;
      align-items: center;
      justify-content: center;
    }
  }

  .right {
    width: 40%;
    margin-left: 7.5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .condition {
      font-size: 16px;
      color: #f7deab;
      padding-bottom: 5px;
    }

    .action {
      background-color: #f7deab;
      color: #d3492c;
      border-radius: 10px;
      width: 60px;

      :hover {
        cursor: pointer;
      }
    }
  }

  &::before {
    position: absolute;
    width: 10px;
    height: 5px;
    /* top: calc(50% - 7.5px); */
    content: "";
    left: calc(55% - 5px);
    background: radial-gradient(
      circle 5px at 5px 0px,
      #fff 5px,
      transparent 50%
    );
  }

  &::after {
    position: absolute;
    width: 10px;
    height: 5px;
    /* top: calc(50% - 7.5px); */
    top: calc(100% - 5px);
    left: calc(55% - 5px);
    content: "";
    background-image: radial-gradient(
      circle 5px at 5px 5px,
      #fff 5px,
      transparent 50%
    );
  }
`;
