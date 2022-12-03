import User from '../models/User.js'

export class UserController {
  static async index (request, response) {
    return response.status(200).send(await User.findAll())
  }

  static async store (request, response) {
    try {
      return response.status(201).send(await User.create(request.body))
    } catch (error) {
      return response.status(400).send(error.errors)
    }
  }

  static async show (request, response) {
    const user = await User.findByPk(request.params.id)

    if (user) {
      return response.status(200).send(user)
    }

    return response.status(404).send({ message: 'not found' })
  }

  static async update (request, response) {
    const user = await User.findByPk(request.params.id)

    if (user) {
      try {
        // eslint-disable-next-line camelcase
        const updated = await user.update(request.body)
        return response.status(200).send(updated)
      } catch (error) {
        return response.status(500).send(error.errors)
      }
    }

    return response.status(404).send({ message: 'not found' })
  }

  static async delete (request, response) {
    try {
      return (await User.destroy({ where: { id: request.params.id } }))
        ? response.status(200).send({ message: 'success' })
        : response.status(404).send({ message: 'not found' })
    } catch (error) {
      return response.status(500).send(error.errors)
    }
  }
}
