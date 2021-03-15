import { createStore } from "redux";
import { reducer } from "./reducers";
import { action, action2, action3 } from "./actions";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(action);
store.dispatch(action2);
store.dispatch(action3);

export default store;
