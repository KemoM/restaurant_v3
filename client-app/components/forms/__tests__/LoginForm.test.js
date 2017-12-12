import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import {LoginForm} from '../LoginForm';

describe('LoginForm Component', () => {
  let component, props;;
 
  beforeEach(() => {
    props = {
      fields: {
        username: "username test",
        password: "password test"
      },
      loggingIn: false, 
      pristine: false, 
      handleSubmit: jest.fn()
    };
    
    component = shallow(<LoginForm  {...props} />);
  });


  it('should render without throwing an error', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

});