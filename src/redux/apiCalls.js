import { loginFailure, loginStart, loginSuccess } from "./userRedux";

import axios from "axios";


export const login = async (dispatch, user) => {
 
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8000/api/user/login", user);
    res&&dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log("Error is",err)
    dispatch(loginFailure());
  }
};

//