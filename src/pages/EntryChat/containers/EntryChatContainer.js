import { connect } from 'react-redux';
import { setNick } from '../../../actions/EntryAction';
import EntryChatView from '../components/EntryChatView';

const mapStateToProps = ({ currentUser }) => {
  return {
    isConnect: currentUser.get('isConnect'),
    nickName: currentUser.get('nickName'),
  };
}

const mapDispatchToProps = dispatch => ({
  saveNickName(nickName) {
    dispatch(setNick({
      nickName,
    }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryChatView);
