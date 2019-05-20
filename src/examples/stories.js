import React from 'react';
import { storiesOf } from '@storybook/react';

import EmptyState from '../components/EmptyState';
import SubscriberList from './SubscriberList';
import SubscriberEmpty from './SubscriberEmpty';

const headers = ['Name', 'Subscribed At', 'Source', 'Subscription State'];
const rows = [
  {id: 22, name: 'Leland', subscribedAt: '01.01.2019', source: 'site', subscriptionState: 'active'},
  {id: 23, name: 'Donna', subscribedAt: '01.02.2019', source: 'site', subscriptionState: 'inactive'},
  {id: 24, name: 'Betty', subscribedAt: '11.02.2019', source: 'instagram', subscriptionState: 'active'},
  {id: 25, name: 'Dale', subscribedAt: '11.02.2019', source: 'twitter', subscriptionState: 'active'},
  {id: 26, name: 'Laura', subscribedAt: '20.03.2019', source: 'twitter', subscriptionState: 'inactive'},
  {id: 27, name: 'Norma', subscribedAt: '21.04.2019', source: 'site', subscriptionState: 'active'},
]

storiesOf('Subscribers|Simple list', module)
  .add('with data', () =>
    <SubscriberList
      headers={headers}
      rows={rows}
    />
  )
  .add('without data', () =>
    <SubscriberList
      headers={headers}
      rows={[]}
    />
  );

storiesOf('Subscribers|List wrapped by EmptyState', module)
  .add('with data', () =>
    <EmptyState data={rows}>
      <SubscriberList
        headers={headers}
        rows={rows}
      />
    </EmptyState>
  )
  .add('without data', () =>
    <EmptyState data={[]}>
      <SubscriberList
        headers={headers}
        rows={[]}
      />
    </EmptyState>
  )
  .add('with custom fallback', () =>
    <EmptyState data={[]} fallback={<SubscriberEmpty />} >
      <SubscriberList
        headers={headers}
        rows={[]}
      />
    </EmptyState>
  );
