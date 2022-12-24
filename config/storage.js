import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

export const storage = {
  path: path.join(process.cwd(), '/storage'),
  dir: [
    {
      target: process.env.ASSET_PATH,
      name: 'public'
    },
    {
      target: process.env.LOG_PATH,
      name: 'logs'
    }
  ]
}
