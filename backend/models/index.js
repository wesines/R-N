const Sequelize = require("sequelize");

const dbConfig = require("../config/db");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });
  
  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  
  db.books = require("./Book")(sequelize, Sequelize);
  
  module.exports = db ;