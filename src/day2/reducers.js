import * as actionTypes from "./types";

export const reducer = (
  state = {
    count: 0,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.UPDATE_COUNT:
      return { count: state.count + 1 };
    case actionTypes.DECREMENT_COUNT:
      return { count: state.count - 1 };
    case actionTypes.INCREMENT_BY_VALUE:
      return { count: state.count + action.payload };
    default:
      return state;
  }
};
