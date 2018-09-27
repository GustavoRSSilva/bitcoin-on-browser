import React from 'react';
import { shallow } from 'enzyme';

import App from '../index';

describe('<App />', () => {
  it('should render some routes', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.length).not.toBe(0);
  });
});
