import { Model, DataTypes } from "sequelize"
import { sequelize } from "./index"

export class Perfil extends Model {
  declare nombre: string
  declare biografia: string
  declare imagenUrl: string
}

Perfil.init({
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  biografia: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  imagenUrl: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  modelName: "Perfil",
  tableName: "Perfiles",
  freezeTableName: true
})


