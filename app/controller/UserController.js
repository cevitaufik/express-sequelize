import User from '../models/user.js'
import { Hash } from '../services/Hash.js'
import { Respose } from '../services/Response.js'
import { CommonController } from './CommonController.js'

export class UserController {
  static async index (request, response) {
    return CommonController.index(User, request, response)
  }

  static async store (request, response) {
    return CommonController.store(User, request, response)
  }

  static async show (request, response) {
    return CommonController.show(User, { username: request.params.username }, response)
  }

  static async update (request, response) {
    return CommonController.update(User, { username: request.params.username }, request, response)
  }

  static async delete (request, response) {
    return CommonController.delete(User, { username: request.params.username }, response)
  }

  static async authenticate (request, response) {
    try {
      const user = await User.unscoped().findOne({
        where: {
          username: request.body.username
        }
      })

      if (user && Hash.check(user.password, request.body.password)) {
        return Respose.ok(response, '', 'You are logged in')
      }

      return Respose.badRequest(response, 'username dan password tidak cocok')
    } catch (error) {
      return Respose.error(response, error.errors)
    }
  }
}
