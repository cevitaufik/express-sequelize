import { Response } from '../services/Response.js'

export class CommonController {
  static async index (model, request, response) {
    const instances = await model.findAll()

    return Response.ok(response, instances)
  }

  static async store (model, request, response) {
    try {
      const instance = await model.create(request.body)
      return Response.created(response, instance)
    } catch (error) {
      return Response.badRequest(response, error.errors)
    }
  }

  static async show (model, filter, response) {
    const instance = await model.findOne({ where: filter })

    if (instance) return Response.ok(response, instance)

    return Response.notFound(response)
  }

  static async update (model, filter, request, response) {
    const instance = await model.findOne({ where: filter })

    if (instance) {
      try {
        const updated = await instance.update(request.body)
        return Response.ok(response, updated, 'Data has been updated')
      } catch (error) {
        console.log(error)
        return Response.error(response, error.errors)
      }
    }

    return Response.notFound(response)
  }

  static async delete (model, filter, response) {
    try {
      return (await model.destroy({ where: filter }))
        ? Response.ok(response, '', 'Data has been deleted')
        : Response.notFound(response)
    } catch (error) {
      return Response.error(response, error.errors)
    }
  }
}
