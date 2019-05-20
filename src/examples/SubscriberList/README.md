Simple table component.

Props:
- headers: array of strings for table header;
- rows: array of objects for table body.

```
<SubscriberList
  headers={['Name', 'Subscribed At', 'Source', 'Subscription State']}
  rows={[
    ...
    {id: 22, name: 'Leland', subscribedAt: '01.01.2019', source: 'site', subscriptionState: 'active'}
    ...
  ]}
/>
```
