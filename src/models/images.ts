import { Model, DataTypes } from 'sequelize';
import { database } from '../config/database';
import { Types } from './types';

export class Images extends Model {
  public id_type!: number;
  public typename!: string;
}

export interface ImagesInterface {
  id_img: number;
  url: string;
  id_type: number;
}

Images.init(
  {
    id_img: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: 'IMAGES',
    sequelize: database,
  }
);

Images.belongsTo(Types, { foreignKey: 'id_type' });
