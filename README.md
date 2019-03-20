Reproduction of bug in https://github.com/airbnb/enzyme/issues/2038

`yarn` to setup
`yarn test` to run tests
`a` to run all tests.

`wrapper.debug()` on component without `React.memo` HOC:
```
<Button className="mockClass">
  <button className="mockClass">
     mockContent
  </button>
</Button>
```

`wrapper.debug()` on component with `React.memo` HOC:
```
<Button className="mockClass" />
```
