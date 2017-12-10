import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should have a main with \'main\' class', () => {
    const wrapper = shallow(<App />);
    const actual = wrapper.find('main').prop('className');
    const expected = 'main';

    expect(actual).toEqual(expected);
  });
});