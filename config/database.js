import Sequelize from 'sequelize'

export class Database {
  constructor () {
    this.name = 'sequelize'
    this.user_name = 'root'
    this.password = ''
    this.host = 'localhost'
    this.dialect = 'mysql'

    this.sequelize = this.connection()
  }

  connection () {
    return new Sequelize(this.name, this.user_name, this.password, {
      host: this.host,
      dialect: this.dialect
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
