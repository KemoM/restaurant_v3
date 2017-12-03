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

import { userActions } from '../actions/user.actions';
import { renderInputField } from './forms/input.field.form.group';
import { validate } from './forms/validators/register.validation';
import { required } from './forms/validators/field.required';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { user } = this.state;
    const { dispatch, valid } = this.props;
    if (valid) {
      dispatch(userActions.register(user));
    }
  }

  render() {
    const { registering, pristine } = this.props;
    const { user } = this.state;
    return (
      <div className="flex-row align-items-center">
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <strong>Register</strong> Form
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} >
                  <Field type="text" id="firstName" name="firstName" label="First Name" labelClass="pr-1" component={renderInputField} validate={required} value={user.firstName} onChange={this.handleChange} />
                  <Field type="text" id="lastName" name="lastName" label="Last Name" component={renderInputField} validate={required} value={user.lastName} onChange={this.handleChange} />
                  <Field type="text" id="username" name="username" label="Username" labelClass="pr-1" component={renderInputField} value={user.username} onChange={this.handleChange} />
                  <Field type="password" id="password" name="password" label="Password" component={renderInputField} value={user.password} onChange={this.handleChange} />
                  <Button type="submit" disabled={pristine || registering} size="sm" color="primary"><i className="fa fa-dot-circle-o" /> Register</Button>
                  {registering && 
                    <img alt="" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                  }
                </Form>
              </CardBody>
              <CardFooter>
                <span>Or you have an account: </span>
                <Link to="/login" className="btn btn-link">Cancel</Link>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration;
  return {
    registering,
    //errorMessage, //TODO
  };
}

const formConfiguration = {  
  form: 'register',
  validate,
};

export default connect(mapStateToProps)(reduxForm(formConfiguration)(RegisterPage));