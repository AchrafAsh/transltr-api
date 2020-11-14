const { Sequelize } = require('sequelize')
require('dotenv').config()

module.exports = new Sequelize(process.env.MYSQL_URI, { dialect: 'postgre' })
