import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../types';

export const addTodoAction = obj => ({
  type: ADD_TODO,
  payload: obj,
});

export const toggleTodoAction = obj => ({
  type: TOGGLE_TODO,
  payload: obj,
});

export const deleteTodoAction = id => ({
  type: DELETE_TODO,
  payload: id,
});
