/**
 * Sequelize connection to SQL Server
 */
import { Sequelize } from 'sequelize';

const userName = 'sa';
const password = 'P@ssword1';
const hostName = 'localhost';
const sampleDbName = 'CesiEat';

export const database = new Sequelize(sampleDbName, userName, password, {
  dialect: 'mssql',
  host: hostName,
  port: 1433,
  logging: false,

  dialectOptions: {
    requestTimeout: 30000,
  },
});
