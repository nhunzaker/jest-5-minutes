test('demo mock functions', function () {
  let handler = jest.fn()

  let button = document.createElement('button')

  button.addEventListener('click', handler)
  button.click()

  expect(handler).toHaveBeenCalled()
})
