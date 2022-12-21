import Express from 'express'
import bodyParser from 'body-parser'
import { RoleController } from '../app/controller/RoleController.js'

const roleRouter = Express.Router()

roleRouter.use(bodyParser.urlencoded({ extended: true }))
roleRouter.use(bodyParser.json())

roleRouter.get('/', (req, res) => RoleController.index(req, res))
roleRouter.post('/', (req, res) => RoleController.store(req, res))
roleRouter.get('/:ability', (req, res) => RoleController.show(req, res))
roleRouter.put('/:ability', (req, res) => RoleController.update(req, res))
roleRouter.delete('/:ability', (req, res) => RoleController.delete(req, res))

export default roleRouter
