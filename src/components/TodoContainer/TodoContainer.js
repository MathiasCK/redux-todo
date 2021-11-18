import React from 'react';
import Todo from '../Todo/Todo';
import TodoAdder from '../TodoAdder/TodoAdder';

import './styles/todolist-styles.scss';

const TodoContainer = () => {
  return (
    <>
      <header className='todolist'>
        <h1 className='todolist__header'>What's happening today?</h1>
        <TodoAdder />
      </header>
      <section className='todoList__container'>
        <Todo />
      </section>
    </>
  );
};

export default TodoContainer;
