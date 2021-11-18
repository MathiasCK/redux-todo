import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import TodoAdder from '../TodoAdder/TodoAdder';
import { useDispatch, useSelector } from 'react-redux';
import { editTodoAction } from '../../redux/actions/actions';
import './styles/todocontainer-styles.scss';
import FilterButtons from '../Buttons/FilterButtons';
import TodoEditor from '../TodoEditor/TodoEditor';

const TodoContainer = () => {
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

  const handleEditTodoSubmit = e => {
    e.preventDefault();
    dispatch(editTodoAction(todoToEdit, inputValue));
    setShowInputField(false);
  };

  if (!todos.length) {
    return <h4 className='todo__empty'>No todos, start adding some above</h4>;
  }

  return (
    <>
      <header className='todolist'>
        <h1 className='todolist__header'>What's happening today?</h1>
        <TodoAdder />
        <FilterButtons todos={todos} setTodosToDisplay={setTodosToDisplay} />
      </header>
      {showInputField && (
        <TodoEditor
          handleEditTodoSubmit={handleEditTodoSubmit}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}
      <section className='todoList__container'>
        {todosToDisplay.map(todo => (
          <Todo
            todo={todo}
            editTodoHandler={editTodoHandler}
            showInputField={showInputField}
          />
        ))}
      </section>
    </>
  );
};

export default TodoContainer;
