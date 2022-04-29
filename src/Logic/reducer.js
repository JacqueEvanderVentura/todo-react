import { ACTIONS } from './actions';
import newTodo from '../Logic/addTodo';

export default function reducer(state, action) {
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.title, action.payload.description)];
    
    case ACTIONS.EDIT_TODO_TITLE:
      return state.map((todo) => action.payload.id === todo.id ? { ...todo, title: action.payload.title } : todo);
  }
}
