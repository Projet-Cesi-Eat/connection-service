import { Model, DataTypes } from 'sequelize';
import { database } from '../config/database';
import { Types } from './types';

export class Cities extends Model {
  public id_type!: number;
  public typename!: string;
}

export interface CitiesInterface {
  id_city: number;
  cityname: string;
}

Cities.init(
  {
    id_city: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cityname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: 'CITIES',
    sequelize: database,
  }
);
