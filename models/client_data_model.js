module.exports = (sequelize, DataTypes) => {
  const client_data = sequelize.define("client_data", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_no: {
      type: DataTypes.STRING,
      primaryKey : true,
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

  return client_data
};
