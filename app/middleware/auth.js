import dotenv from 'dotenv'
import User from '../models/user.js'
import { Response } from '../services/Response.js'

dotenv.config()

export const auth = async (req, res, next) => {
  const apiKey = req.get('Api-Key')

  if (!apiKey) return Response.unauthorize(res, 'Api key is required')

  const user = await User.findOne({ where: { apiKey } })

  if (!user) return Response.unauthorize(res, 'Your api key is not recognized')

  req.auth = user

  next()
}
