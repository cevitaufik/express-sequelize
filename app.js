import Express from 'express'
import userRouter from './router/userRouter.js'
import bodyParser from 'body-parser'

const app = Express()
const port = 3000

app.use('/users', userRouter)
app.use(bodyParser.json())

app.listen(port, () => console.log(`http://localhost:${port}`))
