import { Model, DataTypes } from 'sequelize';
import { database } from '../config/database';

export class Roles extends Model {
  public id_role!: number;
  public rolename!: string;
}

export interface RolesInterface {
  id_role: number;
  rolename: string;
}

Roles.init(
  {
    id_role: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    rolename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: 'ROLES',
    sequelize: database,
  }
);
