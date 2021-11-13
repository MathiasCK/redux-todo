import { createStore } from 'redux';
import { loadState, saveState } from '../utils.js';
import todoReducer from './reducers/todo-reducer';
import throttle from 'lodash.throttle';

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
