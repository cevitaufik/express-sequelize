import Role from '../models/role.js'
import { CommonController } from './CommonController.js'

export class RoleController {
  static async index (request, response) {
    return CommonController.index(Role, request, response)
  }

  static async store (request, response) {
    return CommonController.store(Role, request, response)
  }

  static async show (request, response) {
    return CommonController.show(Role, { ability: request.params.ability }, response)
  }

  static async update (request, response) {
    return CommonController.update(Role, { ability: request.params.ability }, request, response)
  }

  static async delete (request, response) {
    return CommonController.delete(Role, { ability: request.params.ability }, response)
  }
}
