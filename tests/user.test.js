import User from '../src/user'

test('calculates the full name', function () {
  let user = new User({
    first: 'Billy',
    last: 'Booster'
  })

  expect(user.fullname).toEqual('Billy Booster')
})

test('serializes to a JSON structor', function () {
  let user = new User({
    first: 'Billy',
    last: 'Booster'
  })

  expect(user).toMatchSnapshot()
})
