module.exports = (sequelize, DataTypes) => {
  const client_contact = sequelize.define("client_data", {
    phone_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
  });

  return client_contact;
};
