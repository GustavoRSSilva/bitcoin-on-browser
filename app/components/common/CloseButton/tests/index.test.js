import React from 'react';
import { shallow } from 'enzyme';

import CloseButton from '../index';

describe('<CloseButton />', () => {
  it('renders 1 <CloseButton /> component', () => {
    const component = shallow(<CloseButton onClick={() => null} />);
    expect(component).toHaveLength(1);
  });

  it('correctly dispatch event on click', () => {
    const mockCallBack = jest.fn();

    const component = shallow(
      <CloseButton onClick={mockCallBack}>
        <span>submit</span>
      </CloseButton>,
    );
    component.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('correctly match the snapshot', () => {
    const component = shallow(<CloseButton onClick={() => null} />);
    expect(component).toMatchSnapshot();
  });
});
