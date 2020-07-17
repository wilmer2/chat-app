import { createAction } from 'redux-actions';
import { SET_NICK, LOGOUT } from './types/EntryType';

export const setNick = createAction(SET_NICK);
export const logout = createAction(LOGOUT);
