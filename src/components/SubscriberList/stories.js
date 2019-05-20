import React from 'react';
import { storiesOf } from '@storybook/react';

import SubscriberList from './index';

const headers = ['Name', 'Subscribed At', 'Source', 'Subscription State'];

storiesOf('SubscriberList', module)
  .add('with data', () => (
    <SubscriberList
      headers={ headers }
      rows={[
        { id: 22, name: 'Leland', subscribedAt: '01.01.2019', source: 'site', subscriptionState: 'active' },
        { id: 23, name: 'Donna', subscribedAt: '01.02.2019', source: 'site', subscriptionState: 'inactive' },
        { id: 24, name: 'Betty', subscribedAt: '11.02.2019', source: 'instagram', subscriptionState: 'active' },
        { id: 25, name: 'Dale', subscribedAt: '11.02.2019', source: 'twitter', subscriptionState: 'active' },
        { id: 26, name: 'Laura', subscribedAt: '20.03.2019', source: 'twitter', subscriptionState: 'inactive' },
        { id: 27, name: 'Norma', subscribedAt: '21.04.2019', source: 'site', subscriptionState: 'active' },
      ]}
    />
  ))
  .add('without data', () => (
    <SubscriberList
      headers={ headers }
      rows={[]}
    />
  ));
