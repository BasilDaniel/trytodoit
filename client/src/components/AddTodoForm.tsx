import React from 'react';
import { ITodo } from '../models/todos';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { createTodo } from '../redux/actions';
interface IComponentState {
  todo: ITodo;
}
class AddTodoForm extends React.Component<PropsFromRedux, IComponentState> {
  constructor(props: any) {
    super(props);
    this.state = { todo: { title: '', id: '' } };
  }
  render() {
    const { todo } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Title:
          <input type="text" value={todo.title} onChange={this.onChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const id = Date.now().toString();
    this.setState({ todo: { title: target.value, id } });
  };
  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { createTodo } = this.props;
    const { todo } = this.state;
    createTodo(todo);
    this.setState({ todo: { title: '', id: '' } });
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createTodo: (todo: ITodo) => dispatch(createTodo(todo)),
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(AddTodoForm);
