import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';  
import { Link } from 'react-router-dom';
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

import { registerValidation } from './validators/registerValidation';
import { fieldRequired } from './validators/fieldRequired';
import { renderInputField } from './renderInputField';

class RegisterForm extends React.Component {
  renderAlert() {
    if (this.props.errorMessage) {
      return (<div><span><strong>Error!</strong> {this.props.errorMessage}</span></div>);
    }
  }

  render() {
    const { fields: {firstName, lastName, username, password}, registering, pristine, handleSubmit } = this.props;
    return (
      <div className="flex-row align-items-center">
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <strong>Register</strong> Form
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit} >
                  <Field type="text" id="firstName" name="firstName" label="First Name" labelClass="pr-1" component={renderInputField} validate={fieldRequired} value={firstName} />
                  <Field type="text" id="lastName" name="lastName" label="Last Name" component={renderInputField} validate={fieldRequired} value={lastName} />
                  <Field type="text" id="username" name="username" label="Username" labelClass="pr-1" component={renderInputField} value={username} />
                  <Field type="password" id="password" name="password" label="Password" component={renderInputField} value={password} />
                  
                  {this.renderAlert()}
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
  const { registering, errorMessage } = state.registration;
  return {
    registering,
    errorMessage,
  };
}

const formConfiguration = {  
  form: 'register',
  fields: ['firstName', 'lastName', 'username', 'password'],
  validate: registerValidation,
};

export default connect(mapStateToProps)(reduxForm(formConfiguration)(RegisterForm));