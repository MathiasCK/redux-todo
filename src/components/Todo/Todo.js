import React from 'react';
import './styles/todo-styles.scss';
import { useDispatch } from 'react-redux';
import {
  deleteTodoAction,
  toggleTodoAction,
} from '../../redux/actions/actions';

const Todo = ({ todo, editTodoHandler, showInputField }) => {
  const dispatch = useDispatch();

  return (
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
          <div>
            {!showInputField && (
              <>
                <button
                  onClick={() => {
                    editTodoHandler(todo);
                  }}
                >
                  Edit
                </button>

                <button
                  className='todo__content__button--mark'
                  onClick={() => {
                    dispatch(toggleTodoAction(todo));
                  }}
                >
                  Complete
                </button>
              </>
            )}
          </div>
        )}
      </section>
    </article>
  );
};

export default Todo;
