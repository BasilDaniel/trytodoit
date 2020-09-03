import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  todos: todosReducer,
});
