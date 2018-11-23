import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../index';

describe('<Layout />', () => {
  it('renders 1 <Layout /> component', () => {
    const component = shallow(<Layout />);
    expect(component).toHaveLength(1);
  });
});
