import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function usersReducer(state = initialState.users, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return objectAssign({}, state, {isLoading: true});

    case FETCH_USERS_SUCCESS:
      return objectAssign({}, state, {items: action.userData, isLoading:false});

    case FETCH_USERS_ERROR:
      return objectAssign({}, state, {isError: true, isLoading:false});

    default:
      return state;
  }
}
