import { createStore } from 'redux';
import { loadState, saveState } from '../utils.js';

import throttle from 'lodash.throttle';
import todoReducer from './reducers/todo-reducer.js';

const persistedState = loadState();
const store = createStore(todoReducer, persistedState);

store.subscribe(
  throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }, 1000),
);

export default store;
