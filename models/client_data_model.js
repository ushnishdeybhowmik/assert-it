const model = require('../models/client_contact_model');
module.exports = (sequelize, DataTypes) => {
  const client_data = sequelize.define("client_data", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_no: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  client_data.associate = () => {
    client_data.hasMany(model, {
      foreignKey: "phone_no",
      targetKey: "phone_no",
    });
  };

  return client_data;
};
