import { DataTypes, Model } from 'sequelize'
import { Database } from '../../config/database.js'

class User extends Model {
  otherPublicField
}

User.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: 'user_email'
  }
}, {
  sequelize: (new Database()).connection(),
  modelName: 'User',
  tableName: 'users'
  // timestamps: false
})

export default User
