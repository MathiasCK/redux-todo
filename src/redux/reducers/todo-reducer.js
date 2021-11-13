import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../types';

const INITIAL_STATE = {
  todos: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case TOGGLE_TODO:
      const updatedTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    case DELETE_TODO:
      const newTodos = [...state.todos].filter(
        todo => todo.id !== action.payload,
      );
      return {
        ...state,
        todos: newTodos,
      };
    default:
      return state;
  }
};

export default todoReducer;
