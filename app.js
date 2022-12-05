import Express from 'express'
import userRouter from './router/userRouter.js'
import bodyParser from 'body-parser'
import { auth } from './app/middleware/middleware.js'
// import User from './app/models/user.js'

const app = Express()
const port = 3000

app.use(auth)

app.use(bodyParser.json())
app.use('/users', userRouter)

app.listen(port, async () => {
  // await User.sync({ force: true })
  console.log(`http://localhost:${port}`)
})
