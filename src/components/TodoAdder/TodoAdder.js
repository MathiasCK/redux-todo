import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodoAction } from '../../redux/actions/actions';

import FormInput from './Form-Input';
import './styles/todoadder-styles.scss';

const TodoAdder = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addTodoAction({
        id: uuidv4(),
        text: inputValue,
        isComplete: false,
      }),
    );

    setInputValue('');
  };

  return (
    <form className='todo-adder' onSubmit={handleSubmit}>
      <FormInput
        type='text'
        name='add'
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
        label='Add a todo'
        required
      />
      <button className='todo-adder__button'>Submit</button>
    </form>
  );
};

export default TodoAdder;
