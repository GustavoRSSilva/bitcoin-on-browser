import React from 'react';
import { shallow } from 'enzyme';

import Button from '../index';

describe('<Button />', () => {
  it('renders 1 <Button /> component', () => {
    const component = shallow(<Button />);
    expect(component).toHaveLength(1);
  });

  it('correctly dispatch event on click', () => {
    const mockCallBack = jest.fn();

    const button = shallow(
      <Button onClick={mockCallBack}>
        <span>submit</span>
      </Button>,
    );
    button.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
