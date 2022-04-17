import * as actionTypes from "./constants";


// 更改登录状态
export const changeBottomStateAction = (bottomState) => ({
  type: actionTypes.CHANGE_BOTTOM_CONTENT,
  isVisible: bottomState,
});

