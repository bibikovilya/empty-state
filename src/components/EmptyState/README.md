Wrapping component for handle empty state.

Props:
- data: an array of data needs to be checked;
- fallback: custom component if state is empty.

Default props:
- data: []
- fallback: `<EmptyComponent />`

```
<EmptyState data={[...]} fallback={<OverrideEmptyComponent />}>
  ...
</EmptyState>
```
