import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from '../types';

const INITIAL_STATE = {
  todos: [],
};

export const todoReducer = (state = INITIAL_STATE, action) => {
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
    case EDIT_TODO:
      const todoToUpdate = state.todos.find(
        todo => todo.id === action.payload.id,
      );

      todoToUpdate.text = action.newText;

      return state;
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
