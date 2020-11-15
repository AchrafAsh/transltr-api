const { DataTypes } = require('sequelize')
const db = require('../config/db')

module.exports = db.define('website', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    uid: { type: DataTypes.STRING, allowNull: true },
    lang: { type: DataTypes.STRING },
    domain: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE, allowNull: true },
    updatedAt: { type: DataTypes.DATE, allowNull: true }
})
