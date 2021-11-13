import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  deleteTodoAction,
  toogleTodoAction,
} from '../../redux/actions/actions';

const TodoButtons = ({ todo }) => {
  console.log(todo);
  const dispatch = useDispatch();

  return <></>;
};

export default TodoButtons;
