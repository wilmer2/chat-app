import { connect } from 'react-redux';
import LayoutView from '../components/LayoutView';

const mapStateToProps = ({ currentUser }) => {

  return {
    isConnect: currentUser.get('isConnect'),
    nickName: currentUser.get('nickName'),
  };
}

export default connect(mapStateToProps)(LayoutView);
