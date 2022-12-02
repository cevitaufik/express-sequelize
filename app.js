import Express from 'express'
import User from './app/models/User.js'
import userRouter from './router/userRouter.js'

const app = Express()
const port = 3000

app.use('/users', userRouter)

app.listen(port, async () => {
  await User.sync({ force: true })
  console.log(`http://localhost:${port}`)
})
