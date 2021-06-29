import { Model, DataTypes } from 'sequelize';
import { database } from '../config/database';
import { Cities } from './cities';
import { Images } from './images';
import { Roles } from './roles';

export class Users extends Model {
  public id_user!: number;
  public fisrtname!: string;
  public lastname!: string;
  public email!: string;
  public password!: string;
  public siret?: number;
  public numstreet!: number;
  public street!: string;
  public points!: number;
  public sponsor!: number;
  public sponsorised!: number;
  public token!: string;
  public createdAt!: number;
  public updatedAt!: number;
  public id_role!: number;
  public id_city!: number;
  public id_img!: number;
}

export interface UsersInterface {
  id_user?: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  siret?: number;
  numstreet: number;
  street: string;
  points: number;
  sponsor: number;
  sponsorised: number;
  token: string;
  createdAt?: number;
  updatedAt?: number;
  id_role?: number;
  id_city?: number;
  id_img?: number;
}

Users.init(
  {
    id_user: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    siret: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    numstreet: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sponsor: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    sponsorised: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    tableName: 'USERS',
    sequelize: database,
  }
);

Users.belongsTo(Cities, { foreignKey: 'id_city' });
Users.belongsTo(Images, { foreignKey: 'id_img' });
Users.belongsTo(Roles, { foreignKey: 'id_role' });
