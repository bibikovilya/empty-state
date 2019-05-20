Wrapping component for handle empty state.

Props:
- data: array of data need to check;
- fallback: override component for empty state.

Default props:
- data: []
- fallback: `<EmptyComponent />`

```
<EmptyState data={[...]} fallback={<OverrideEmptyComponent />}>
  ...
</EmptyState>
```
