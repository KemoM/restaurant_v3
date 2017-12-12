import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/forms/LoginForm';
import { userActions } from '../actions/userActions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    //this.props.dispatch(userActions.logout()); //eslint-disable-line

    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // No "preventDefault" because Redux Form does it.

    const { username, password } = e;
    const { dispatch } = this.props;
    dispatch(userActions.login(username, password));
  }
  
  render() {
    return (
      <div className="flex-row align-items-center">
        <LoginForm
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default connect()(LoginPage);