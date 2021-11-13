import React, { useEffect, useState } from 'react';
import './styles/todo-styles.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTodoAction,
  toggleTodoAction,
} from '../../redux/actions/actions';
import FilterButtons from '../Buttons/FilterButtons';

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const [todosToDisplay, setTodosToDisplay] = useState([]);

  useEffect(() => {
    setTodosToDisplay(todos);
  }, [todos]);

  if (!todos.length) {
    return <h4 className='todo__empty'>No todos, start adding some above</h4>;
  }

  if (!todosToDisplay.length) {
    return (
      <>
        <FilterButtons todos={todos} setTodosToDisplay={setTodosToDisplay} />
        <h4 className='todo__empty'>No todos to show here</h4>
      </>
    );
  }
  return (
    <>
      <FilterButtons todos={todos} setTodosToDisplay={setTodosToDisplay} />
      {todosToDisplay.map(todo => (
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
      ))}
    </>
  );
};

export default Todo;
