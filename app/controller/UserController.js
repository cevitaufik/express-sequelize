import User from '../models/user.js'
import { Hash } from '../services/Hash.js'
import { Respose } from '../services/Response.js'

export class UserController {
  static async index (request, response) {
    const users = await User.findAll()

    return Respose.ok(response, users)
  }

  static async store (request, response) {
    try {
      const user = await User.create(request.body)
      return Respose.created(response, user)
    } catch (error) {
      return Respose.badRequest(response, error.errors)
    }
  }

  static async show (request, response) {
    const user = await User.findByPk(request.params.id)

    if (user) {
      return Respose.ok(response, user)
    }

    return Respose.notFound(response)
  }

  static async update (request, response) {
    const user = await User.findByPk(request.params.id)

    if (user) {
      try {
        // eslint-disable-next-line camelcase
        const updated = await user.update(request.body)
        return Respose.ok(response, updated, 'Data has been updated')
      } catch (error) {
        return Respose.error(response, error.errors)
      }
    }

    return Respose.notFound(response)
  }

  static async delete (request, response) {
    try {
      return (await User.destroy({ where: { id: request.params.id } }))
        ? Respose.ok(response, '', 'Data has been deleted')
        : Respose.notFound(response)
    } catch (error) {
      return Respose.error(response, error.errors)
    }
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
