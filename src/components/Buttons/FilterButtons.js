import React from 'react';

const FilterButtons = ({ setTodosToDisplay, todos }) => {
  return (
    <section className='filter__buttons'>
      <button
        onClick={() => {
          setTodosToDisplay(todos);
        }}
      >
        Show all
      </button>
      <button
        onClick={() => {
          const finishedTodos = todos.filter(todo => todo.isComplete);
          setTodosToDisplay(finishedTodos);
        }}
      >
        Show finished
      </button>
      <button
        onClick={() => {
          const finishedTodos = todos.filter(todo => !todo.isComplete);
          setTodosToDisplay(finishedTodos);
        }}
      >
        Show unfinished
      </button>
    </section>
  );
};

export default FilterButtons;
