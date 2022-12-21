import { Respose } from '../services/Response.js'

export class CommonController {
  static async index (model, request, response) {
    const instances = await model.findAll()

    return Respose.ok(response, instances)
  }

  static async store (model, request, response) {
    try {
      const instance = await model.create(request.body)
      return Respose.created(response, instance)
    } catch (error) {
      return Respose.badRequest(response, error.errors)
    }
  }

  static async show (model, filter, response) {
    const instance = await model.findOne({ where: filter })

    if (instance) return Respose.ok(response, instance)

    return Respose.notFound(response)
  }

  static async update (model, filter, request, response) {
    const instance = await model.findOne({ where: filter })

    if (instance) {
      try {
        const updated = await instance.update(request.body)
        return Respose.ok(response, updated, 'Data has been updated')
      } catch (error) {
        console.log(error)
        return Respose.error(response, error.errors)
      }
    }

    return Respose.notFound(response)
  }

  static async delete (model, filter, response) {
    try {
      return (await model.destroy({ where: filter }))
        ? Respose.ok(response, '', 'Data has been deleted')
        : Respose.notFound(response)
    } catch (error) {
      return Respose.error(response, error.errors)
    }
  }
}
