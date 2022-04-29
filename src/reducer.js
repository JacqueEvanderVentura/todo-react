import { ACTIONS } from './actions';

export default function redurer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO: 
      return {
        ...state,
        items: state.items.concat(action.payload.items),
      };
    
    default: {
      return state;
    }
  }
}
