import React from 'react';
import TestRenderer from 'react-test-renderer';

import EmptyState from '.';

describe('EmptyState', () => {
  it('should render correctly without props', () => {
    const component = TestRenderer.create(
      <EmptyState />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
