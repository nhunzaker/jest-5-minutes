import xhr from 'xhr'

jest.mock('xhr')

test('mock modules', function (done) {
  let options = { url: '/sample-url', json: true }

  xhr(options, function (error, response, body) {
    expect(response.statusCode).toBe(200)

    expect(body).toEqual({ success: true })
  })
})
