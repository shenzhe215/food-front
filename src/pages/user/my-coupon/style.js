import styled from "styled-components";

export const MyCouponWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 20px;
  > div {
    /* margin-right: calc(((100 / 4 * 1%) - 260px) * 1.3); */
    margin-right: calc((100% - 960px) / 3);
  }

  > div:nth-child(4n + 0) {
    margin-right: 0px;
  }
`;
