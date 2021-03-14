import { createStore }  from 'redux'

const reducer = (state = {
  count: 0
}, action) => {
  if (action.type === 'updateCount') return { count: state.count + 1 }
  if (action.type === 'decrementCount') return { count: state.count - 1 }
  if (action.type === 'incrementByValue') return { count: state.count + action.payload}
  return state
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const action = {
  type: 'updateCount'
}

const action2 = {
  type: 'decrementCount'
}

const action3 = {
  type: 'incrementByValue',
  payload: 2
}
store.dispatch(action)
store.dispatch(action)
store.dispatch(action2)
store.dispatch(action3)

export default store