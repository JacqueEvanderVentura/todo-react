import { ACTIONS } from './actions';
import newTodo from '../Logic/addTodo';

export default function reducer(state, action) {
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.title, action.payload.description)];
    
    case ACTIONS.EDIT_TODO_TITLE:
      return state.map((todo) => action.payload.id === todo.id ? { ...todo, title: action.payload.title } : todo);

    case ACTIONS.EDIT_TODO_DESCRIPTION:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, description: action.payload.description }
          : todo
      );

    case ACTIONS.TOGGLE_STATUS:
      return state.map(todo=>todo.id=== action.payload.id?{...todo, isDone: !todo.isDone}:todo);

    case ACTIONS.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id)

    default:
      return state;

    
  }
}
