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

import { loginValidation } from './validators/loginValidation';
import { renderInputField } from './renderInputField';

class LoginForm extends React.Component {
  renderAlert() {
    if (this.props.errorMessage) {
      return (<div><span><strong>Error!</strong> {this.props.errorMessage}</span></div>);
    }
  }

  render() {
    const { fields: {username, password}, loggingIn, pristine, handleSubmit } = this.props;
    return (
      <div className="flex-row align-items-center">
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <strong>Login</strong> Form
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit} >
                  <Field type="text" id="username" name="username" label="Username" labelClass="pr-1" component={renderInputField} value={username} />
                  <Field type="password" id="password" name="password" label="Password" component={renderInputField} value={password} />
                  {this.renderAlert()}
                  <Button type="submit" disabled={pristine || loggingIn} size="sm" color="primary"><i className="fa fa-dot-circle-o" /> Login</Button>
                  {loggingIn && 
                    <img alt="" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                  }
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
  const loggingIn = state.authentication.get('loggingIn');
  const errorMessage = state.authentication.get('error');
  return {
    loggingIn,
    errorMessage,
  };
}

const formConfiguration = {  
  form: 'loginform',
  fields: ['username', 'password'],
  validate: loginValidation,
};

export default connect(mapStateToProps)(reduxForm(formConfiguration)(LoginForm));