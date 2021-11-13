import React from 'react';
import './styles/todo-styles.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTodoAction,
  toggleTodoAction,
} from '../../redux/actions/actions';

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  if (!todos.length) {
    return <h4 className='todo__empty'>No todos, start adding some above</h4>;
  }

  return todos.map(todo => (
    <article
      key={todo.id}
      className={todo.isComplete ? 'todo__finished' : 'todo'}
    >
      <section className='todo__content'>
        <p className='todo__content--paragraph'>{todo.text}</p>
        {todo.isComplete ? (
          <div>
            <button
              className='todo__content__button--mark'
              onClick={() => {
                dispatch(toggleTodoAction(todo));
              }}
            >
              Undo
            </button>
            <button
              className='todo__content__button--delete'
              onClick={() => {
                dispatch(deleteTodoAction(todo.id));
              }}
            >
              Delete
            </button>
          </div>
        ) : (
          <button
            className='todo__content__button--mark'
            onClick={() => {
              dispatch(toggleTodoAction(todo));
            }}
          >
            Complete
          </button>
        )}
      </section>
    </article>
  ));
};

export default Todo;
