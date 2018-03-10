require('dotenv').config()

const Sequelize = require('sequelize')
const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME} = process.env

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres',
    port: DB_PORT,
    operatorsAliases: Sequelize.Op,
  },
  test: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres',
    port: DB_PORT,
    operatorsAliases: Sequelize.Op,
  },
  production: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres',
    port: DB_PORT,
    operatorsAliases: Sequelize.Op,
  },
}
