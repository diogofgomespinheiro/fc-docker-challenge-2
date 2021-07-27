const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const People = require('../models/People');

const connection = new Sequelize(dbConfig);

People.init(connection);

module.exports = connection;
