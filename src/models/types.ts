import { Model, DataTypes } from 'sequelize';
import { database } from '../config/database';

export class Types extends Model {
  public id_type!: number;
  public typename!: string;
}

export interface TypesInterface {
  id_type: number;
  typename: string;
}

Types.init(
  {
    id_type: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    typename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: 'TYPES',
    sequelize: database,
  }
);
