import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../redux/rootReducer';

const TodoList = (props: PropsFromRedux) => {
  const { todos } = props;
  return (
    <>
      {todos.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
};
const mapStateToProps = (state: RootState) => ({
  todos: state.todos.todos,
});
const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(TodoList);
