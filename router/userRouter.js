import Express from 'express'
import User from '../app/models/User.js'

const userRouter = Express.Router()

userRouter.get('/', async (req, res) => {
  const tes = await User.create({
    first_name: 'Joko',
    last_name: 'widodo',
    email: 'email@gmail.com'
  })

  res.send(tes.toJSON())
})

export default userRouter
