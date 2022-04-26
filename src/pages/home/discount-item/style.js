import styled from "styled-components";

export const CouponWraper = styled.div`
  background-color: #e9bb16;
  position: relative;
  display: inline-block;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  min-width: 150px;
  /* margin-right: 10px; */
  margin-left: 10px;
  margin-bottom: 15px;
  padding: 0 10px;

  :hover {
    cursor: pointer;
  }
  
  &::before {
    position: absolute;
    width: 5px;
    height: 10px;
    top: calc(50% - 7.5px);
    content: "";
    right: 0;
    background: radial-gradient(circle 5px at 5px 5px, pink 5px, #e9bb16 50%);
  }

  &::after {
    position: absolute;
    width: 5px;
    height: 10px;
    top: calc(50% - 7.5px);
    content: "";
    left: 0;
    background-image: radial-gradient(
      circle 5px at 0 5px,
      pink 5px,
      #e9bb16 50%
    );
  }

  .coupon {
    padding: 15px;
  }
  .coupon-title {
    font-size: 15px;
  }

  .coupon-content {
    font-weight: 700;
    font-size: 20px;
  }
`;
