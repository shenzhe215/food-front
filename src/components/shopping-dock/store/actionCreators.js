import * as actionTypes from "./constants";


// 更改dock可见性
export const changeDockVisiableAction = (isDock) => ({
  type: actionTypes.CHANGE_DOCK_VISIABLE,
  isDock,
});

