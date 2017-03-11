# Jest in 5 minutes

Jest is a JavaScript testing framework. It has several key features
that we like:

- Batteries included. Jest ships with powerful mocking capabilities,
  an assertion library, a robust watch mode, and handles code coverage
  out of the box.
- Babel integration. Jest works with Babel. Out of the box. No
  hassles.
- JSDOM. Simulate the DOM environment for fast unit testing.
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

## Mock Functions

```
test('demo mock functions', function () {
  let handler = jest.fn()

  let button = document.createElement('button')

  button.addEventListener('click', handler)
  button.click()

  expect(handler).toHaveBeenCalled()
})
```

## Mock Modules

```javascript
// Lives in tests/__mocks__/xhr
export default function (options, callback) {
  callback(null, { statusCode: 200 }, { success: true })
}
```

```javascript
// test/mock-modules.js
import xhr from 'xhr'

jest.mock('xhr')

test('mock modules', function (done) {
  let options = { url: '/sample-url', json: true }

  xhr(options, function (error, response, body) {
    expect(response.statusCode).toBe(200)

    expect(body).toEqual({ success: true })
  })
})

```
