import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export class Database {
  constructor () {
    this.name = process.env.DB_DATABASE
    this.username = process.env.DB_USERNAME
    this.password = process.env.DB_PASSWORD
    this.host = process.env.DB_HOST
    this.dialect = process.env.DB_CONNECTION

    this.sequelize = this.connection()
  }

  connection () {
    return new Sequelize(this.name, this.username, this.password, {
      host: this.host,
      dialect: this.dialect,
      logging: false
    })
  }

  async auth () {
    return this.sequelize.authenticate()
      .then(
        full => {
          return true
        },
        rej => {
          return false
        }
      )
  }
}
