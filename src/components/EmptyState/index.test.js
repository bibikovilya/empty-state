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

  it('should render children with data', () => {
    const data = ['A', 'B', 'C']
    const component = TestRenderer.create(
      <EmptyState data={data}>
        {data}
      </EmptyState>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render default empty state component', () => {
    const data = []
    const component = TestRenderer.create(
      <EmptyState data={data}>
        {data}
      </EmptyState>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render empty state component', () => {
    const data = []
    const fallback = <span>Empty state</span>
    const component = TestRenderer.create(
      <EmptyState data={data} fallback={fallback}>
        {data}
      </EmptyState>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
