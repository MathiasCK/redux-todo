import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../types';
import todoReducer from './todo-reducer';

describe('todoReducer', () => {
  it('should return the initial state', () => {
    expect(todoReducer(undefined, {})).toMatchSnapshot();
  });
  test('adds one item succesfully', () => {
    const action = {
      type: ADD_TODO,
      payload: {
        id: 1234,
        text: 'Write reducer test',
        isComplete: false,
      },
    };
    const initialState = undefined;

    const nextState = todoReducer(initialState, action);

    expect(nextState).toEqual({
      todos: [{ id: 1234, text: 'Write reducer test', isComplete: false }],
    });
  });
  test('adds another item succesfully', () => {
    const action = {
      type: ADD_TODO,
      payload: {
        id: 12345,
        text: 'Write another reducer test',
        isComplete: false,
      },
    };
    const initialState = {
      todos: [{ id: 1234, text: 'Write reducer test', isComplete: false }],
    };

    const nextState = todoReducer(initialState, action);

    expect(nextState).toEqual({
      todos: [
        { id: 12345, text: 'Write another reducer test', isComplete: false },
        { id: 1234, text: 'Write reducer test', isComplete: false },
      ],
    });
  });
  test('marks todo as complete', () => {
    const action = {
      type: TOGGLE_TODO,
      payload: {
        id: 1234,
        text: 'Write another reducer test',
        isComplete: false,
      },
    };
    const initialState = {
      todos: [{ id: 1234, text: 'Write reducer test', isComplete: false }],
    };
    const nextState = todoReducer(initialState, action);

    expect(nextState).toEqual({
      todos: [{ id: 1234, text: 'Write reducer test', isComplete: true }],
    });
  });
  test('deletes todo', () => {
    const action = {
      type: DELETE_TODO,
      payload: 1234,
    };
    const initialState = {
      todos: [
        { id: 12345, text: 'Write another reducer test', isComplete: true },
        { id: 1234, text: 'Write reducer test', isComplete: false },
      ],
    };
    const nextState = todoReducer(initialState, action);

    expect(nextState).toEqual({
      todos: [
        { id: 12345, text: 'Write another reducer test', isComplete: true },
      ],
    });
  });
});
