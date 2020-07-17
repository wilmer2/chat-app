import { combineReducers } from 'redux';
import currentUser from './currentUser';
import isEqual from 'lodash/isEqual';

import { LOGOUT } from '../../actions/types/EntryType';

const reducer = combineReducers({
  currentUser,
});

const appReducer = (state, action) => {
  if (isEqual(action.type, LOGOUT)) state = undefined;

  return reducer(state, action);
}

export default appReducer;
