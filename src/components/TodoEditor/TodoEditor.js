import React from 'react';
import FormInput from '../TodoAdder/Form-Input';
import './styles/todoeditor-styles.scss';

const TodoEditor = ({ handleEditTodoSubmit, inputValue, setInputValue }) => {
  return (
    <form className='todo__update' onSubmit={handleEditTodoSubmit}>
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
  );
};

export default TodoEditor;
