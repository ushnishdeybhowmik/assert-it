const db_config = require("../config/db_config");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  db_config.DB,
  db_config.USER,
  db_config.PASSWORD,
  {
    host: db_config.HOST,
    dialect: db_config.DIALECT,

    pool: {
      max: db_config.pool.max,
      min: db_config.pool.min,
      acquire: db_config.pool.acquire,
      idle: db_config.pool.idle,
    },
  }
);

sequelize
  .authenticate()
  .then(() => console.log(`Connected to ${db_config.DB}`))
  .catch((err) => console.log(`Error : ${err}`));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.client_data = require("./client_data_model.js")(sequelize, DataTypes);
db.client_contact = require("./client_contact_model.js")(sequelize, DataTypes);

//NOT REQUIRED UNLESS NEEDED.
// db.sequelize.sync({ force: false }).then(() => console.log("Resync Done!"));

module.exports = db;
