import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';  
import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Form,
} from 'reactstrap';

import { userActions } from '../actions/userActions';
import { loginValidation } from '../components/forms/validators/loginValidation';
import { renderInputField } from '../components/forms/renderInputField';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    //this.props.dispatch(userActions.logout()); //eslint-disable-line

    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;
    const { dispatch, valid } = this.props;
    if (valid) {
      dispatch(userActions.login(username, password));
    }
  }
  
  renderAlert() {
    if (this.props.errorMessage) {
      return (<div><span><strong>Error!</strong> {this.props.errorMessage}</span></div>);
    }
  }

  //TODO - Create Login component
  render() {
    const { loggingIn, pristine } = this.props; //eslint-disable-line
    const { username, password } = this.state;

    return (
      <div className="flex-row align-items-center">
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <strong>Login</strong> Form
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} >
                  <Field type="text" id="username" name="username" label="Username" labelClass="pr-1" component={renderInputField} value={username} onChange={this.handleChange} />
                  <Field type="password" id="password" name="password" label="Password" component={renderInputField} value={password} onChange={this.handleChange} />
                  {this.renderAlert()}
                  <Button type="submit" disabled={pristine || loggingIn} size="sm" color="primary"><i className="fa fa-dot-circle-o" /> Login</Button>
                </Form>
              </CardBody>
              <CardFooter>
                <span>Or you want to register: </span>
                <Link to="/register" className="btn btn-link">Register</Link>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const loggingIn = state.authentication.get('loggingIn'); //should be used for loader gif, TODO
  const errorMessage = state.authentication.get('error');
  return {
    loggingIn,
    errorMessage,
  };
}

const formConfiguration = {  
  form: 'login',
  validate: loginValidation,
};

export default connect(mapStateToProps)(reduxForm(formConfiguration)(LoginPage));
