import { reqLogin } from '../api'

export const login = (userInfo) => {
  return async (dispatch) => {
    const res = await reqLogin(userInfo);
    const resData = res && res.data;
    
    if(resData.success){
      dispatch({
        type: 'LOGIN_SUCCESS',
        user: resData.data,
        msg: resData.msg
      })
    } else {
      dispatch({
        type: 'LOGIN_FAIL',
        msg: resData.msg
      })
    }
    return resData;
  }
}