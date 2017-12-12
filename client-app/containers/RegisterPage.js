import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from '../components/forms/RegisterForm';
import { userActions } from '../actions/userActions';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const user = {
      firstName: event.firstName,
      lastName: event.lastName,
      username: event.username,
      password: event.password,
    };
    const { dispatch } = this.props;
    dispatch(userActions.register(user));
  }

  render() {
    return (
      <div className="register-form">
        <RegisterForm onSubmit={this.handleSubmit} />
      </div> 
    );
  }
}

export default connect()(RegisterPage);