import styled from "styled-components";
export const HomeWraper = styled.div`
  margin-top: -10px;
  .banner-img {
    max-width: 100%;
    height: 500px;

    :hover {
      cursor: pointer;
    }
  }

  .page-left,
  .page-right {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.15);
    top: calc((100% - 35px) / 2);
    width: 25px;
    height: 35px;
    line-height: 35px;
    z-index: 999;
    &:hover {
      cursor: pointer;
      background-color: #989898;
    }

    .icon {
      color: #fff;
      font-size: 12px;
    }
  }

  .page-left {
    left: 0;
    border-radius: 0px 50px 50px 0;
    text-align: left;
    padding-left: 3px;
  }

  .page-right {
    right: 0;
    border-radius: 50px 0px 0px 50px;
    text-align: right;
    padding-right: 3px;
  }
`;

export const DiscountWraper = styled.div`
  width: 37%;
  height: 300px;
  float: right;

  background-color: #fff;
  /* background-color: #aaa; */
  /* width: 80%; */
  margin-top: 20px;
  padding-left: 10px;

  /* position: relative; */

  .coupon-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .coupon-more {
      font-size: 15px;
      margin-right: 15px;
      :hover {
        cursor: pointer;
      }
    }
  }

  .couponTitle {
    padding: 5px;
    width: 150px;
    font-size: 18px;
    font-weight: 700;
    margin: 15px 20px;
    border-radius: 5px;
    background-color: #de291e;
    color: #fff;
    text-align: center;
  }

  .coupons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 15px;
    position: relative;
    min-height: 220px;
    .coupon-item {
      width: 48%;
    }

    .page-left {
      margin-left: -10px;
    }
  }
`;

export const HotFood = styled.div`
  float: left;
  background-color: #fff;
  width: 61%;
  height: 300px;
  margin-right: 20px;
  margin-top: 20px;
  display: flex;

  .ht-left,
  .ht-right {
    height: 300px;
  }

  .ht-left {
    width: 150px;
    /* background-color: #fff; */
    background-color: #de291e;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    .title {
      color: #fff;
      font-weight: 700;
      font-size: 30px;
      writing-mode: vertical-lr;
    }

    .icon {
      font-size: 35px;
      color: #fff;
      margin-top: 10px;
    }
  }

  .ht-right {
    width: calc(100% - 150px);
    /* background-color: #f2f3b4; */
    display: flex;
    justify-content: left;
    align-items: center;
    /* overflow-x: hidden; */
    position: relative;
  }

  .food-item {
    min-width: 195px;
    text-align: center;
    position: relative;

    :hover {
      cursor: pointer;
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      right: 0;
      width: 1px;
      height: 200px;
      transform: translateY(-50%);
      background: linear-gradient(180deg, white, #dbdbdb, white);
    }

    

    .food-img {
      margin-top: 30px;
      height: 140px;
      width: 140px;
    }

    .food-item-mid {
      font-size: 14px;
      font-weight: 400;
      color: #333;
      padding: 13px 20px;
    }

    .food-item-down {
      color: #e22e24;
      margin: 7px 20px;
      font-size: 14px;
      font-weight: 400;
    }
  }
`;
