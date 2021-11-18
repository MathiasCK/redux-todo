import React, { useEffect, useState } from 'react';
import './styles/todo-styles.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTodoAction,
  editTodoAction,
  toggleTodoAction,
} from '../../redux/actions/actions';
import FilterButtons from '../Buttons/FilterButtons';
import FormInput from '../TodoAdder/Form-Input';

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const [todosToDisplay, setTodosToDisplay] = useState([]);
  const [showInputField, setShowInputField] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [todoToEdit, setTodoToEdit] = useState(undefined);

  useEffect(() => {
    setTodosToDisplay(todos);
  }, [todos]);

  const editTodoHandler = todo => {
    setShowInputField(!showInputField);
    setInputValue(todo.text);
    setTodoToEdit(todo);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editTodoAction(todoToEdit, inputValue));
    setShowInputField(false);
  };

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
      {showInputField && (
        <form className='todo__update' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='add'
            value={inputValue}
            onChange={e => {
              setInputValue(e.target.value);
            }}
            required
          />

          <button className='todo__content__button--mark' type='submit'>
            Update todo
          </button>
        </form>
      )}
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
      ))}
    </>
  );
};

export default Todo;
