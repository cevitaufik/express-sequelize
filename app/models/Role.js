import { Database } from '../../config/database.js'
import { DataTypes, Model } from 'sequelize'

class Role extends Model {
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

Role.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  ability: {
    type: DataTypes.STRING,
    unique: 'role_ability',
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
}, {
  sequelize: (new Database()).connection(),
  modelName: 'Role',
  freezeTableName: true,
  tableName: 'roles'
})

export default Role
