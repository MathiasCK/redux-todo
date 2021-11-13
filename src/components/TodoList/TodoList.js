import React, { useState } from 'react';
import Todo from '../Todo/Todo';
import TodoAdder from '../TodoAdder/TodoAdder';
import './styles/todolist-styles.css';

const TodoList = () => {
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

export default TodoList;
