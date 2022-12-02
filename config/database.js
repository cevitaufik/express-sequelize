import Sequelize from 'sequelize'

// export const sequelize = new Sequelize('sequelize', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// })

export class Database {
  constructor () {
    // this.sequelize = new Sequelize('sequelize', 'root', '', {
    //   host: 'localhost',
    //   dialect: 'mysql'
    // })
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
    // const sequelize = new Sequelize('sequelize', 'root', '', {
    //   host: 'localhost',
    //   dialect: 'mysql'
    // })

    // try {
    //   await this.sequelize.authenticate()
    //   return false
    // } catch (error) {
    //   return false
    // }

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
