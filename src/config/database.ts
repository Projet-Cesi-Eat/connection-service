/**
 * Sequelize connection to SQL Server
 */
import {Sequelize} from "sequelize";

const userName = 'sa';
const password = 'P@ssword1'; // update me
const hostName = 'localhost';
const sampleDbName = 'CesiEat';

export const database = new Sequelize(sampleDbName, userName, password, {
  dialect: 'mssql',
  host: hostName,
  port: 1433, // Default port
  logging: false, // disable logging; default: console.log

  dialectOptions: {
      requestTimeout: 30000 // timeout = 30 seconds
  }
});