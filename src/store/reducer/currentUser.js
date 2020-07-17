import typeToReducer from 'type-to-reducer';
import { fromJS } from 'immutable';
import { SET_NICK } from '../../actions/types/EntryType';

const initialState = fromJS({
  isConnect: false,
  nickName: '',
});

const reducer = typeToReducer({
  [SET_NICK]: (state, { payload: { nickName } }) => {
    return state.withMutations(mutator => {
      mutator.set('nickName', nickName);
      mutator.set('isConnect', true);
    });
  },
}, initialState);

export default reducer;
