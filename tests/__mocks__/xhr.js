/**
 * Mock of the XHR library
 */

export default function (options, callback) {
  callback(null, { statusCode: 200 }, { success: true })
}
