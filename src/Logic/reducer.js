import { ACTIONS } from './actions';
import newTodo from '../Logic/addTodo';

export default function reducer(state, action) {
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.title, action.payload.description)];
  }
}
