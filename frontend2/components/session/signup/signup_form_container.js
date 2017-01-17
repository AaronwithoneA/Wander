import { connect } from 'react-redux';
import { login, logout, signup } from '../../../../actions/session_actions';
import SignUpForm from './signup_form';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps ) => {

  return {
    signup: user => dispatch(signup(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
