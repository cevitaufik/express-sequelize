export class Response {
  static ok (response, data, message = null) {
    return response
      .status(200)
      .json({
        success: true,
        message,
        data
      })
  }

  static created (response, data, message = 'Data has been created') {
    return response
      .status(201)
      .json({
        success: true,
        message,
        data
      })
  }

  static notFound (response, message = 'Not found') {
    return response
      .status(404)
      .json({
        success: false,
        message
      })
  }

  static badRequest (response, message) {
    return response
      .status(400)
      .json({
        success: false,
        message
      })
  }

  static unauthorize (response, message = 'Unauthorized') {
    return response
      .status(401)
      .json({
        success: false,
        message
      })
  }

  static error (response, message = 'Internal server error') {
    return response
      .status(500)
      .json({
        success: false,
        message
      })
  }
}
