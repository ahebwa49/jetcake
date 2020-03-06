import { LOGIN, LOGOUT } from "../actions/actions";
const defaultState = {
  username: ""
};
export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      const newState = Object.assign({}, defaultState, action.user);
      return newState;
      // eslint-disable-next-line
      break;
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};
