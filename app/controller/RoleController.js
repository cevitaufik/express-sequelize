import Role from '../models/role.js'
import { Respose } from '../services/Response.js'

export class RoleController {
  static async index (request, response) {
    const roles = await Role.findAll()

    return Respose.ok(response, roles)
  }
}
