import { bindActionCreators, configureStore } from "@reduxjs/toolkit";
import reducer, { updateCount, incrementValue, decrementCount } from "./slices";

const store = configureStore({
  reducer: {
    count: reducer,
  },
});

const bindedActions = bindActionCreators(
  {
    updateCount,
    incrementValue,
  },
  store.dispatch
);

// bindedActions.updateCount();
// store.dispatch(decrementCount());
// bindedActions.incrementValue(2);
export default store;
