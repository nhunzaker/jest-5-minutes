# Jest in 2 minutes

Jest is a JavaScript testing framework. It has several key features
that we like:

- Babel integration. Jest works with Babel. Out of the box. No hassles.
- Batteries included. Jest ships with powerful mocking capabilities,
  an assertion library, a robust watch mode, and handles code coverage
  out of the box.
- Snapshot testing. Jest has a snapshot feature that allows you to
  write assertions against diffs of serializable information.

## A basic test

```javascript
import User from '../src/user'

test('calculates the full name', function () {
  let user = new User({
    first: 'Billy',
    last: 'Booster'
  })

  expect(user.fullname).toEqual('Billy Booster')
})
```

## A basic snapshot test

```javascript
import User from '../src/user'

test('serializes to a JSON structor', function () {
  let user = new User({
    first: 'Billy',
    last: 'Booster'
  })

  expect(JSON.stringify(user)).toMatchSnapshot()
})
```
