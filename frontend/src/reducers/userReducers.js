import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants";

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
        return { loading: false, userInfo: action.payload };        //action.payload comes from userAction at the dispatch USER_SIGNIN_SUCCESS line
    case USER_SIGNIN_FAIL:
        return {loading: false, error: action.payload}
    case USER_SIGNOUT:
        return {};      //empty object should remove data and user object
    default:
      return state;
  }
};
