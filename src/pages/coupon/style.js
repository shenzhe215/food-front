import styled from "styled-components";

export const CouponWraper = styled.div`
  background-color: #fff;

  .coupon-title {
    height: 35px;
    line-height: 1;
    margin: 20px auto;
    text-align: center;

    .i1 {
      width: 35px;
      height: 20px;

      display: inline-block;
      background-image: url(${require("@/assets/img/hot-icons.png")});
      background-position: 0 0;
      background-repeat: no-repeat;
      overflow: hidden;
      vertical-align: middle;
    }

    h3 {
      display: inline-block;
      margin: 0 5px;
      color: #111;
      font-weight: 700;
      font-size: 20px;
      line-height: 35px;
      vertical-align: middle;
    }
  }
  .coupon-content {
    display: flex;
    flex-wrap: wrap;
    padding: 0px 20px;
    justify-content: space-between;

    > div {
      margin-right: calc((100% - 1200px) / 4);
    }

    > div:nth-child(5n + 0) {
      margin-right: 0px;
    }
  }
`;
