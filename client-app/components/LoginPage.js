import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions/user.actions';

import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    //this.props.dispatch(userActions.logout()); //eslint-disable-line

    this.state = {
      username: '',
      password: '',
      submitted: false,
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

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { loggingIn } = this.props; //eslint-disable-line
    const { username, password, submitted } = this.state;

    return (
      <div className="app flex-row align-items-center">
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Login</strong> Form
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} >
                  <FormGroup row>
                    <Label htmlFor="username" className="pr-1">Username</Label>
                    <Input type="text" id="username" name="username" required value={username} onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password" value={password} onChange={this.handleChange} />
                     {submitted && !password ? <span>Password is required!</span> : ""}
                  </FormGroup>
                  
                  <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Login</Button>
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
  return {
    loggingIn,
  };
}

export default connect(mapStateToProps)(LoginPage);