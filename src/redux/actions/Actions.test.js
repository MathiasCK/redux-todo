import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../types';
import { addTodoAction, deleteTodoAction, toggleTodoAction } from './actions';

describe('todos actions', () => {
  test('addTodoAction', () => {
    const action = addTodoAction({
      type: ADD_TODO,
      id: 1234,
      text: 'Write action test',
      isComplete: false,
    });

    expect(action.payload).toEqual({
      type: ADD_TODO,
      id: 1234,
      text: 'Write action test',
      isComplete: false,
    });
  });
  test('addTodoAction id', () => {
    const action = addTodoAction({
      type: ADD_TODO,
      id: 1234,
      text: 'Write action test',
      isComplete: false,
    });

    expect(action.payload.id).toEqual(1234);
  });
  test('toggleTodoAction', () => {
    const action = toggleTodoAction({
      type: TOGGLE_TODO,
      id: 1234,
      text: 'Write action test',
      isComplete: false,
    });

    expect(action.payload.type).toEqual(TOGGLE_TODO);
  });
  test('deleteTodoAction', () => {
    const action = deleteTodoAction({
      type: DELETE_TODO,
      id: 1234,
    });

    expect(action.payload.id).toEqual(1234);
  });
});
