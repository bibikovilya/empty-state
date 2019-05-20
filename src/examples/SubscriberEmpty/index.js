import React from 'react';
import { linkTo } from '@storybook/addon-links';

const SubscriberEmpty = () => (
  <button onClick={linkTo('Subscribers|List wrapped by EmptyState', 'with data')}>
    Create subscriber
  </button>
)

export default SubscriberEmpty;
