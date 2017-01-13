import { connect } from 'react-redux';
import { login, logout, signup } from '../../../../actions/session_actions';
import LoginForm from './login_form';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps ) => {
  return {
    login: user => dispatch(login(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
