import { ITodo } from '../models/todos';
import { CREATE_TODO } from './types';

const initialState = {
  todos: [],
};
export const todosReducer = (state: { todos: ITodo[] } = initialState, action: any) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    default:
      return state;
  }
};
