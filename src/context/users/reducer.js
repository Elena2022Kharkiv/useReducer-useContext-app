import { ADD_USER, REMOVE_USER, EDIT_USER } from "./boilerplate";

export const initialState = [
  { id: 1, title: 'User 1' },
  { id: 2, title: 'User 2' },
  { id: 3, title: 'User 3' },
];

export const reducer = (state, action) => {
  
  switch ( action.type ) {

    case ADD_USER:
      console.log(action);
      return [ ...state, action.payload ];
     
    case REMOVE_USER:
      const delUserId = action.payload;

      const newState = state.filter(user => user.id !== delUserId)
      console.log(newState);

      return newState; 

    case EDIT_USER: 
      console.log(action.payload); 
      return action.payload; 

    default:
      throw new Error();
  }
}

