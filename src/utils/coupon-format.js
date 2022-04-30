import moment from "moment";
export function couponformat(coupon) {
  const { title, type, requirement, description, beginTime } = coupon;
  moment(beginTime).format("YYYY-MM-DD");
  const useTiem = "   " + moment(beginTime).format("YYYY-MM-DD") + "  前有效";
  if (type === 1) {
    return "满" + requirement + "减" + title + useTiem;
  } else {
    return "满" + requirement + "打" + title + "折" + useTiem;
  }
}
