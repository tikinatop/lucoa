import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TODOItem from '../components/TODOItem';
import * as TODOActions from '../actions/todo';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TODOActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TODOItem);
