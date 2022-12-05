import { DataTypes, Model } from 'sequelize'
import { Database } from '../../config/database.js'
import { Hash } from '../services/Hash.js'

class User extends Model {
  otherPublicField
}

User.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: 'user_username'
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: 'user_email'
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
    set (value) {
      this.setDataValue('password', Hash.make(value, this.username.length))
    }
  }
}, {
  sequelize: (new Database()).connection(),
  modelName: 'User',
  tableName: 'users',
  defaultScope: {
    attributes: { exclude: ['password'] }
  }
})

export default User
