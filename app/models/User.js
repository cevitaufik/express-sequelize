import { Database } from '../../config/database.js'
import { Hash } from '../services/Hash.js'
import { DataTypes, Model } from 'sequelize'
class User extends Model {
  otherPublicField

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate (models) {
    // define association here
  }
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
    unique: true
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
    unique: true
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
  freezeTableName: true,
  tableName: 'users',
  defaultScope: {
    attributes: { exclude: ['password'] }
  }
})

export default User
