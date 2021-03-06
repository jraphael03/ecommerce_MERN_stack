import axios from "axios";
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../constants/userConstants";

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
      const { data } = await axios.post('/api/users/signin', {email, password});
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));        // Will stay logged in even if window is closed   [Takes in two parameters, first is the key, second is the data but in JSON.stringify()]
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message       // check if response exists and message exists if so return message otherwise return general message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  dispatch({ type: USER_SIGNOUT });
}
 