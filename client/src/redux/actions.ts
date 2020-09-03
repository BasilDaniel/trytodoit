import { ITodo } from '../models/todos';
import { CREATE_TODO } from './types';

export function createTodo(todo: ITodo) {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
}
