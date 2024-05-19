const Sequelize = require('sequelize');
const db = require('../config/dbConfig');

// https://sequelize.org/docs/v7/models/data-types/
const Category = db.define('category', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Category;