# Empty state component

## Getting start

Install all packages:
`yarn`

Run storybook:
`yarn storybook`

Run tests:
`yarn test`

## Investigation

I've logged app.chatchamp.com application. And I've faced the pages with empty tables (Broadcasts, Campaigns, Subscribers, etc.) for a new account. I've decided to focus on tables in my further work.

## Implementation

I've analyzed and investigated the possible approaches for EmptyState component implementation:
### 1. Embedded EmptyState component.
```
  <SubscriberList>
    data.length === 0
      ? <EmptyState>
      : <render data>

    ...
  </SubscriberList>
```
Pros:
- the simpliest way;
- the full control for render EmptyState component.

Cons:
- we need to make empty check for render EmptyState component every time;
- the code not so clean.

### 2. EmptyState Wrapper component.
```
  <EmptyState data={data}>
    <SubscriberList data={data} />
  </EmptyState>
```
Pros:
- clean and simple usage;
- all logic can be transfered to EmptyState component.

Cons:
- need to pass data to EmptyState component too;

### 3. Higher-Order Component
```
const SubscriberListWithEmpty = withEmptyState(SubscriberList)
...
<SubscriberListWithEmpty data={data} />
```
Pros:
- the cleaniest code;
- don't need to pass additional data.

Cons:
- don't obvious approach;
- the additional abstraction layer.

Firstly I've tried to implement the third HOC approach. It's a good way to handle an empty state. But also it's restricting you with high order component realization. The customization becomes tougher.
Then I've tried the second wrapper approach with child render. And it shows me like more customizable solution. You have sufficient control over EmptyState component. And you have the all ways to set up any implementation details. Also, it has a pretty readable and understandable code.

The EmptyState component has the next behavior:
- render default empty state component when data prop length is empty and fallback prop isn't passed;
- render fallback prop if data length is empty.

The storybook has two scopes:
- Simple list: the table component without empty state handling;
- List wrapped by EmptyState: the table component wrapped by empty state handler.

## Next steps

Next possible improvements:
- add the new function prop for override default is empty check.
