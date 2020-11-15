const { DataTypes } = require('sequelize')
const db = require('../config/db')

module.exports = db.define('translation', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    uid: { type: DataTypes.STRING, allowNull: true },
    lang: { type: DataTypes.STRING },
    domain: { type: DataTypes.STRING },
    pathname: { type: DataTypes.STRING },
    selector: { type: DataTypes.STRING, allowNull: false },
    text: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE, allowNull: true },
    updatedAt: { type: DataTypes.DATE, allowNull: true }
})
