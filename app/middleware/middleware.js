import dotenv from 'dotenv'

dotenv.config()

export const auth = (req, res, next) => {
  const apiKey = req.get('Api-Key')

  if (!apiKey) return res.status(401).send({ message: 'Api key is required' })

  if (apiKey !== process.env.API_KEY) {
    return res.status(401).send({ message: 'Your api key is not recognized' })
  }

  next()
}
