// @flow
import { combineReducers } from 'redux';
import { CREATE_TODO, CHECK_TODO, REMOVE_TODO } from '../actions/todoitem';

function todos(state = [], action) {
  switch (action.type) {
    case CREATE_TODO:
      return [
        ...state,
        {
          text: action.text,
          isDone: false
        }
      ];
    case CHECK_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos
});

export default todoApp;
