import { createStore, applyMiddleware } from 'redux';
// import { createStoreHook } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { persistMiddleware } from './middlewares/persist-middleware';
// import { ActionType } from './action-types';

export const store = createStore(
  reducers,
  {},
  applyMiddleware(persistMiddleware, thunk)
);

// /* ============Manual Testing of Redux Store ========== */
// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'code',
//   },
// });
// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'text',
//   },
// });
// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'code',
//   },
// });
// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'text',
//   },
// });

// console.log(store.getState());
