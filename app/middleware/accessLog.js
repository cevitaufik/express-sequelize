import winston from 'winston'
import { Storage } from '../services/Storage.js'

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    // new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({
      filename: `${Storage.dir('logs')}/access.log`
    })
  ]
})

export const accessLog = (req, res, next) => {
  logger.info({ username: req.auth.username })

  next()
}
