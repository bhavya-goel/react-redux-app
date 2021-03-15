import * as actionTypes from "./types";

export const action = {
  type: actionTypes.UPDATE_COUNT,
};

export const action2 = {
  type: actionTypes.DECREMENT_COUNT,
};

export const action3 = {
  type: actionTypes.INCREMENT_BY_VALUE,
  payload: 2,
};
