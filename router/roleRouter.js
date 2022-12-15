import Express from 'express'
import bodyParser from 'body-parser'
import { RoleController } from '../app/controller/RoleController.js'

const roleRouter = Express.Router()

roleRouter.use(bodyParser.urlencoded({ extended: true }))
roleRouter.use(bodyParser.json())

roleRouter.get('/', (req, res) => RoleController.index(req, res))

export default roleRouter
