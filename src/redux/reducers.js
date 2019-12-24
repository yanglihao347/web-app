//包含 n个 reducer函数，根据老的state和指定的action返回一个新的state
import { combineReducers } from 'redux';

function xxx(state = 0, action) {
    return state;
}

function yyy(state = 0, action) {
    return state;
}

const initUser = {
  username: '',
  _id: '',
  type: '',
  msg: ''
}

function user(state = initUser, action) {
  const { user, msg } = action;
  switch(action.type) {
    case 'LOGIN_SUCCESS': 
      return { ...state, ...user, msg };
    case 'LOGIN_FAIL': 
      return { ...state, msg };
    case 'LOG_OUT':
      return state;
    default:
      return state;
  }
}

export default combineReducers({
    xxx,
    yyy,
    user
})
