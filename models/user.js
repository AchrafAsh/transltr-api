const { DataTypes } = require('sequelize')
const db = require('../config/db')

module.exports = db.define('user', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    uid: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING },
    langs: { type: DataTypes.STRING },
    apiKey: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE, allowNull: true },
    updatedAt: { type: DataTypes.DATE, allowNull: true }
})
