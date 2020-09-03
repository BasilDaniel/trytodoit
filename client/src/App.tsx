import React, { useEffect } from 'react';
import './App.css';
import { Menu } from './components/Menu';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import { pushNotificationsInit } from './firebase';

export const App = () => {
  useEffect(() => {
    pushNotificationsInit();
  }, []);
  return (
    <>
      <Menu />
      <AddTodoForm />
      <TodoList />
    </>
  );
};
