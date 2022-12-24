import fs from 'fs'
import chalk from 'chalk'
import { storage } from '../../config/storage.js'

const log = console.log

storage.dir.forEach(dir => {
  fs.symlink(dir.target, `${storage.path}/${dir.name}`, 'dir', (err) => {
    if (err) return console.error(err)
    log(chalk.green(`directory named "${dir.name}" has been created`))
  })
})
