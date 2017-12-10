import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../Footer';

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    const footerText = renderedComponent.find('.ml-auto').text();
    expect(footerText).toEqual('Powered by Test Boilerplate');
  });
});