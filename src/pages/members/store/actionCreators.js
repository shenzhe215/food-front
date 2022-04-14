import { getMemberList } from "@/services/member";

import * as actionTypes from "./constants";

const changePlayListAction = (memberList) => ({
  type: actionTypes.CHANGE_MEMBER_LIST,
  memberList,
});

// 对外暴露的action
export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    getMemberList().then((res) => {
      memberList = res.data.items;
      dispatch(changePlayListAction(memberList));
    });
  };
};
