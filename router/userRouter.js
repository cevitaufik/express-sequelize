import Express from 'express'
import bodyParser from 'body-parser'
import multer from 'multer'
import { UserController } from '../app/controller/UserController.js'

const userRouter = Express.Router()
const upload = multer()

userRouter.use(bodyParser.urlencoded({ extended: true }))
userRouter.use(bodyParser.json())
userRouter.use(upload.array())

userRouter.get('/', (req, res) => UserController.index(req, res))
userRouter.post('/', (req, res) => UserController.store(req, res))
userRouter.get('/:username', (req, res) => UserController.show(req, res))
userRouter.put('/:username', (req, res) => UserController.update(req, res))
userRouter.delete('/:username', (req, res) => UserController.delete(req, res))
userRouter.post('/login', (req, res) => UserController.authenticate(req, res))

export default userRouter
