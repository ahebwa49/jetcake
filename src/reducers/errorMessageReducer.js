import { ERROR_MESSAGE } from "../actions/actions";
const defaultState = "";

export const errorMessageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ERROR_MESSAGE:
      const newState = state + action.message;
      return newState;
      // eslint-disable-next-line
      break;
    default:
      return state;
  }
};
