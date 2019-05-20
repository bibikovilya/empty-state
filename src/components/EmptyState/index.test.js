import React from 'react';
import { shallow } from 'enzyme';
import EmptyState from '.';

describe('EmptyState', () => {
  it('should render correctly without props', () => {
    const component = shallow(<EmptyState />);

    expect(component).toMatchSnapshot();
  });
});
